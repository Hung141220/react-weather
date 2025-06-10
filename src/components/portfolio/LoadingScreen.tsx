import { useEffect, useState } from "react";

const txtRandom = ["<Hello Developer/>", "<Backend Developer/>"];
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("");
  const [indexTxt, setIndexTxt] = useState(0);

  useEffect(() => {
    let index = 0;
    let fullText = txtRandom[indexTxt];
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="
        z-50 flex flex-col
        text-gray-100
        bg-black
        fixed inset-0 items-center justify-center
      "
    >
      <div
        className="
          mb-4
          text-[16px] font-mono font-bold
          md:text-4xl
        "
      >
        {text}{" "}
        <span
          className="
            ml-1
            animate-blink
          "
        >
          {" "}
          |{" "}
        </span>
      </div>

      <div
        className="
          overflow-hidden
          w-[150px] h-[2px]
          bg-gray-800
          rounded relative
          md:w-[200px]
        "
      >
        <div
          className="
            w-[40%] h-full
            bg-blue-500
            shadow-[0_0_15px_#3b82f6] animate-loading-bar
          "
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
