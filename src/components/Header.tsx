import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">NewsGPT</div>
        <div className="flex gap-4">
          <button
            onClick={() => {
              window.open("/code-walkthrough.html", "_blank");
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Code Walkthrough
          </button>
          <a
            href="https://x.com/DevanshKushwa15"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/devansh-kushwah-3504191b9/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Devansh-Kushwah"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
