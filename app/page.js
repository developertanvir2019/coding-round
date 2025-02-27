import Image from "next/image";
import TypingSpeedTest from "./components/TypingTest/TypingTest";
import CountdownTimer from "./components/count/Count";
import TypingCheck from "./components/Typing/TypingCheck";

export default function Home() {
  return (
    <div>
      <TypingSpeedTest />
      {/* <CountdownTimer /> */}
      <TypingCheck />
    </div>
  );
}
