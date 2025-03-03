import { useState } from "react";

const Lift = () => {
  const [start, setStart] = useState<number | null>(0);
  const [floor, setFloor] = useState<number | null>(null);
  const ranges = [
    { label: "0-9", start: 0 },
    { label: "10-19", start: 10 },
    { label: "20-29", start: 20 },
    { label: "30-39", start: 30 },
    { label: "40-50", start: 40 },
  ];
  return (
    <div className="h-96 bg-slate-200 py-3 grid grid-cols-2 gap-5 ">
      <div>
        <p className="text-center text-3xl pb-2 font-bold text-orange-500">
          Floor Number
        </p>
        <div className="flex justify-center items-center gap-5">
          {ranges?.map((range) => (
            <div key={range.start}>
              <button
                onClick={() => {
                  setStart(range.start), setFloor(null);
                }}
                className={`${
                  range?.start == start ? "bg-green-300" : "bg-slate-600"
                } w-14 py-1 text-lg text-white font-semibold border rounded-md`}
              >
                {range.label}
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5 max-w-52 px-5 py-2 rounded-md mx-auto mt-5 bg-cyan-200">
          {[...Array(10)].map((_, i) => (
            <button
              onClick={() => setFloor(i + start)}
              className={`${
                i + start == floor ? "bg-red-500" : "bg-cyan-400"
              } w-9 h-9 rounded-full  text-base text-white font-semibold`}
              key={i}
            >
              {i + start}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-blue-200 h-full">
        <h3 className="max-w-48 mx-auto text-7xl font-bold text-center mt-12 bg-gradient-to-r from-green-500 to-purple-400 bg-clip-text text-transparent">
          {floor}
        </h3>
      </div>
    </div>
  );
};

export default Lift;
