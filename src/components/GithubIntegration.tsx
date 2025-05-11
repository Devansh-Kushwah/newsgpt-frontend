import React from 'react';
import { Github } from 'lucide-react';

const GithubIntegration = () => {
  return (
    <div className="mb-12 mt-4">
      <button className="bg-[#1e1e24] hover:bg-[#2a2a32] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors border border-gray-700">
        <Github size={18} />
        Introducing GitHub integration!
      </button>
    </div>
  );
};

export default GithubIntegration;