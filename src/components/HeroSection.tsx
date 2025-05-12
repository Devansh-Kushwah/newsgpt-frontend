import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center mb-6 sm:mb-20 mt-8">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
        Your AI News GPT
      </h1>
      <p className="text-gray-400 text-sm sm:text-lg">
        Get personalized news summaries powered by{" "}
        <span className="text-white font-medium">artificial intelligence</span>
      </p>
    </div>
  );
};

export default HeroSection;
