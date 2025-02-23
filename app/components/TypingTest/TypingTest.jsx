"use client";
import React, { useState, useEffect, useRef } from "react";

const sampleText =
  "The quick brown fox jumps over the lazy dog. Practice makes perfect.";

const TypingSpeedTest = () => {
  const [text, setText] = useState(sampleText);
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      if (timeLeft === 0) {
        calculateWPM();
      }
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const startTest = () => {
    setIsRunning(true);
    setUserInput("");
    setTimeLeft(60);
    setWpm(0);
  };

  const handleChange = (e) => {
    if (!isRunning) return;
    setUserInput(e.target.value);
  };

  const calculateWPM = () => {
    const wordsTyped = userInput.trim().split(" ").length;
    setWpm(Math.round((wordsTyped / (60 - timeLeft)) * 60));
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Typing Speed Test</h1>
      <p className="text-gray-700 mb-4">{text}</p>
      <textarea
        className="border p-2 w-full max-w-md"
        value={userInput}
        onChange={handleChange}
        placeholder="Start typing here..."
        disabled={!isRunning}
      />
      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={startTest}
        >
          Start
        </button>
        <span className="text-lg">Time Left: {timeLeft}s</span>
        <span className="text-lg">WPM: {wpm}</span>
      </div>
    </div>
  );
};

export default TypingSpeedTest;
