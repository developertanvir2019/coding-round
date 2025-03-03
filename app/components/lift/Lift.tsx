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
    <div className="h-96 bg-slate-200 py-6 grid grid-cols-2 gap-5 ">
      <div>
        <div className="flex justify-center items-center gap-5">
          {ranges?.map((range) => (
            <div key={range.start}>
              <button
                onClick={() => {
                  setStart(range.start), setFloor(null);
                }}
                className={`${
                  range?.start == start ? "bg-green-300" : "bg-slate-600"
                } w-16 py-2 text-lg text-white font-semibold border rounded-md`}
              >
                {range.label}
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5 max-w-48 mx-auto mt-10">
          {[...Array(10)].map((_, i) => (
            <button
              onClick={() => setFloor(i + start)}
              className={`${
                i + start == floor ? "bg-green-500" : "bg-slate-600"
              } w-12 h-12 rounded-full  text-lg text-white font-semibold`}
              key={i}
            >
              {i + start}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-blue-200 h-full">going.....</div>
    </div>
  );
};

export default Lift;
