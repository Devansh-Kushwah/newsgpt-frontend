import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import PromptInput from "./components/PromptInput";
import QuickStartSection from "./components/QuickStartSection";
import ChatHistory from "./components/ChatHistory";
import { useLocation, useParams } from "react-router-dom";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  isStreaming?: boolean;
}

interface SessionItem {
  content: string;
  role: string;
  timestamp: Date;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const { sessionId } = useParams();
  const [newSessionId, setNewSessionId] = useState<string | null>(null);
  const pathname = useLocation();
  const [quickStart, setQuickStart] = useState("");

  useEffect(() => {
    setMessages([]);
    if (!sessionId) {
      setNewSessionId(Math.random().toString(36).substring(2, 15));
    } else {
      setNewSessionId(sessionId);
      getChatHistory();
    }
  }, [sessionId, pathname]);

  const getChatHistory = async () => {
    const response = await fetch(`http://localhost:8000/api/chat/history`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId }),
    });
    const data = await response.json();
    data.forEach((item: SessionItem) => {
      if (item.role === "user") {
        setMessages((prev) => [
          ...prev,
          {
            text: item.content,
            isUser: true,
            timestamp: new Date(item.timestamp),
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            text: item.content,
            isUser: false,
            timestamp: new Date(item.timestamp),
          },
        ]);
      }
    });
  };

  const handleSubmit = async (text: string) => {
    const userMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date(),
    };

    const assistantMessage: Message = {
      text: "",
      isUser: false,
      timestamp: new Date(),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setIsStreaming(true);

    try {
      const response = await fetch("http://localhost:8000/api/chat?limit=3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: text, sessionId: newSessionId }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No reader available");
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              setIsStreaming(false);
              setMessages((prev) =>
                prev.map((msg, idx) =>
                  idx === prev.length - 1 ? { ...msg, isStreaming: false } : msg
                )
              );
              break;
            }

            setMessages((prev) =>
              prev.map((msg, idx) =>
                idx === prev.length - 1
                  ? { ...msg, text: msg.text + data }
                  : msg
              )
            );
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, there was an error processing your request.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
      setIsStreaming(false);
    }
  };

  return (
    <main
      className={`flex-1 flex flex-col items-center justify-center px-4 py-12 max-w-5xl mx-auto w-full overflow-y-auto ${
        messages.length > 0 ? "justify-between" : ""
      }`}
    >
      {messages.length <= 0 && <HeroSection />}
      {messages.length > 0 && <ChatHistory messages={messages} />}
      <PromptInput
        onSubmit={handleSubmit}
        setQuickStart={setQuickStart}
        quickStart={quickStart}
        disabled={isStreaming}
      />
      {messages.length <= 0 && (
        <QuickStartSection setQuickStart={setQuickStart} />
      )}
    </main>
  );
}

export default App;
