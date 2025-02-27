"use client";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes (120 seconds)

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{ textAlign: "center", fontSize: "2rem", fontFamily: "Arial" }}>
      <h1>2-Minute Countdown Timer</h1>
      <div>{timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}</div>
    </div>
  );
};

export default CountdownTimer;
