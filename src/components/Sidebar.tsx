import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import baseUrl from "../config/index";
interface ChatSession {
  sessionId: string;
  lastMessage: string;
  timestamp: string;
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const deviceId = localStorage.getItem("deviceId");
  useEffect(() => {
    fetchChatSessions();
  }, []);

  const fetchChatSessions = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/chat/sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deviceId }),
      });
      const data = await response.json();
      setChatSessions(data);
    } catch (error) {
      console.error("Error fetching chat sessions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    navigate("/");
  };

  const handleChatSession = (newSessionId: string) => {
    if (!pathname.includes(newSessionId)) {
      navigate(`/c/${newSessionId}`);
    }
  };

  return (
    <div
      className={`left-0 top-0 h-full bg-[#0f1014] text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-4 hover:bg-[#2a2b30] transition-colors"
        >
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          )}
        </button>

        {/* Chat Sessions List */}
        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : (
            <div className="space-y-2 p-2">
              {chatSessions.map((session) => (
                <div
                  key={session.sessionId}
                  onClick={() => {
                    handleChatSession(session.sessionId);
                  }}
                  className="block p-3 rounded hover:bg-[#2a2b30] transition-colors"
                >
                  {!isCollapsed && (
                    <div className="truncate">
                      <div className="text-sm font-medium truncate">
                        {session.lastMessage || "New Chat"}
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(session.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* New Chat Button */}
        <div
          onClick={handleNewChat}
          className="p-4 border-t border-[#2a2b30] hover:bg-[#2a2b30] transition-colors"
        >
          {!isCollapsed && (
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              New Chat
            </span>
          )}
          {isCollapsed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
