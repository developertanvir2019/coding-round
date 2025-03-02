"use client";
import { useEffect, useState } from "react";
import Lift from "../components/lift/Lift";

const TopScroll = () => {
  //
  //
  //
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const handleWindow = () => {
      const scrollTop = window.scrollY;
      const viewPort = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollTop / (docHeight - viewPort)) * 100;
      setWidth(scrollPercent);
    };
    window.addEventListener("scroll", handleWindow);
    return () => window.removeEventListener("scroll", handleWindow);
  }, []);

  return (
    <div>
      <div className="bg-red-500 w-full h-2 sticky top-0">
        <div
          style={{ width: `${width}%` }}
          className={`bg-green-500 h-2 sticky top-0`}
        ></div>
      </div>
      <div>
        <Lift />
        <div className="w-full h-44 bg-purple-300"></div>
        <div className="w-full h-44 bg-blue-400"></div>
        <div className="w-full h-44 bg-purple-900"></div>
        <div className="w-full h-44 bg-cyan-900"></div>
        <div className="w-full h-44 bg-cyan-400"></div>
        <div className="w-full h-44 bg-orange-400"></div>
        <div className="w-full h-44 bg-slate-400"></div>
      </div>
    </div>
  );
};

export default TopScroll;
