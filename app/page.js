import Image from "next/image";
import TypingSpeedTest from "./components/TypingTest/TypingTest";
import CountdownTimer from "./components/count/Count";

export default function Home() {
  return (
    <div>
      <TypingSpeedTest />
      <CountdownTimer />
    </div>
  );
}
