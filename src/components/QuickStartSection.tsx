import React from "react";

const QuickStartCard = ({
  title,
  setQuickStart,
}: {
  title: string;
  setQuickStart: (quickStart: string) => void;
}) => {
  return (
    <button
      onClick={() => setQuickStart(title)}
      className="glass-effect hover:bg-[#2a2a32] text-white py-2 px-3 sm:py-3 sm:px-5 rounded-full text-sm transition-colors border border-gray-700"
    >
      {title}
    </button>
  );
};

const QuickStartSection = ({
  setQuickStart,
}: {
  setQuickStart: (quickStart: string) => void;
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
      <QuickStartCard title="Latest Tech News" setQuickStart={setQuickStart} />
      <QuickStartCard title="World Headlines" setQuickStart={setQuickStart} />
      <QuickStartCard title="Business Updates" setQuickStart={setQuickStart} />
      <QuickStartCard title="Sports Coverage" setQuickStart={setQuickStart} />
      <QuickStartCard
        title="Entertainment News"
        setQuickStart={setQuickStart}
      />
    </div>
  );
};

export default QuickStartSection;
