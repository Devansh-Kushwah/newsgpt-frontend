import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";

interface PromptInputProps {
  onSubmit: (message: string) => void;
  disabled: boolean;
  quickStart: string;
  setQuickStart: (quickStart: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({
  onSubmit,
  disabled,
  quickStart,
  setQuickStart,
}) => {
  const [inputText, setInputText] = useState(quickStart);

  useEffect(() => {
    if (inputText == quickStart) {
      setQuickStart("");
    } else {
      setInputText(quickStart);
    }
  }, [quickStart]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSubmit(inputText);
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mb-8">
      <div className="relative p-[1px] rounded-lg animate-border">
        <div className="relative glass-effect rounded-lg">
          <textarea
            disabled={disabled}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Ask about any news topic..."
            className="w-full bg-transparent text-white p-6 pl-6 pr-24 rounded-lg focus:outline-none placeholder-gray-400"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-3">
            <button
              title="Send"
              type="submit"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PromptInput;
