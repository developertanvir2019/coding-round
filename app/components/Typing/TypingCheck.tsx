// lfjaowfjaw
// jfweiofjwe
// jfaoie
"use client";
import { faker } from "@faker-js/faker";
import GenerateWord from "./component/GenerateWord";
import CountDownTimer from "./component/CountDownTimer";
import { MdRefresh } from "react-icons/md";
const TypingCheck = () => {
  const words = faker.word.words(30);
  const handleRestart = () => {
    console.log("akafjo");
  };
  return (
    <div className="flex flex-col gap-3 items-center h-[500px] p-10 bg-slate-800 font-mono w-full text-center">
      <CountDownTimer timeLeft={30} />
      <GenerateWord words={words} />
      <button onClick={handleRestart}>
        <MdRefresh className="w-7 h-7 text-slate-500" />{" "}
      </button>
    </div>
  );
};

export default TypingCheck;
