import React from "react";
import Markdown from "react-markdown";
import "./ChatHistory.css";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatHistoryProps {
  messages: Message[];
}

const getParsedMessage = (message: string) => {
  const parsedMessage = message.replace(/\\n/g, "\n");
  return <Markdown>{parsedMessage}</Markdown>;
};

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <div className="w-full max-w-3xl mb-8 space-y-4 h-[calc(100vh-282px)] overflow-y-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`${
              message.isUser ? "bg-[#303030] max-w-[80%] " : ""
            }  rounded-lg `}
          >
            <div
              className={`p-4 rounded-lg ${
                message.isUser ? "glass-effect" : "leading-7"
              } `}
            >
              <p className="text-white">{getParsedMessage(message.text)}</p>
              <p className="text-xs text-gray-400 mt-1 text-right">
                {message.isUser
                  ? message.timestamp.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
