"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
const Navbar = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex justify-between items-center relative py-4">
      <h3 className="text-2xl font-bold z-20 bg-white ">Tanvir</h3>
      <div
        className={`max-md:absolute  max-md:top-14 left-0 bg-white w-full ${
          expand
            ? "max-md:opacity-100 max-md:scale-100 max-md:pointer-events-auto"
            : "max-md:opacity-0 max-md:scale-95 max-md:pointer-events-none"
        } transition-all duration-200`}
      >
        <div className=" font-semibold  flex flex-col md:flex-row items-start md:items-center justify-center gap-3 ">
          <Link href="/">Home</Link>
          <Link href="/file">File-Explorer</Link>
          <Link href="/search">Search</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="flex justify-center gap-4 items-center">
        <Link
          href="#"
          className="bg-cyan-700 text-nowrap text-white font-semibold px-3 py-1 rounded-md"
        >
          Sign Up
        </Link>
        <div
          className="relative w-8 h-8 flex items-center justify-center cursor-pointer md:hidden"
          onClick={() => setExpand((prev) => !prev)}
        >
          {/* Menu Icon */}
          <IoMenuOutline
            className={`absolute text-2xl transition-all duration-300 transform ${
              expand ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100"
            }`}
          />

          <span
            className={`absolute text-2xl transition-all duration-300 transform ${
              expand
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 -rotate-90"
            }`}
          >
            X
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
