import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("");
  const fullText = import.meta.env.VITE_FULL_TEXT_PORTFOLIO;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    /* cleanup */
    return () => clearInterval(interval);
  }, [onComplete, fullText]);

  return (
    <div className="z-5 flex h-screen flex-col items-center justify-center bg-black text-gray-100">
      <div className="mb-2 text-xl font-bold md:text-4xl">
        {text}
        <span className="animate-blink ml-2">|</span>
      </div>

      <div className="relative h-1 w-2/5 overflow-hidden rounded-2xl bg-gray-800">
        <div className="animate-loading-bar h-full w-[40%] translate-x-0.5 bg-blue-500 shadow-[-8px_0_8px_2px_#3b82f6]"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
