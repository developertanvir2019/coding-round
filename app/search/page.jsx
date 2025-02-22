"use client";
import { useEffect, useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setData(cache?.input);
      return;
    }
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${input}`
    );
    if (response.ok) {
      console.log("error occured");
    }
    const recipe = await response.json();
    setData(recipe?.recipes);
    setCache((prev) => ({ ...prev, [input]: recipe?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  console.log("tanvir", data);
  return (
    <div className="flex justify-center">
      <div className="max-w-96">
        <h2 className="text-center py-5 text-xl font-semibold">
          Optimize Search
        </h2>

        <div>
          <div>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              onFocus={() => setShow(true)}
              onBlur={() => setShow(false)}
              className="border border-gray-800 w-96 px-4 py-1 rounded-md mx-auto"
            />
          </div>
          {show && data?.length > 0 && (
            <div className="border max-h-[250px] overflow-y-scroll p-3 border-gray-800 ">
              {data?.map((name) => (
                <div
                  className="py-1 my-1 hover:bg-gray-300 cursor-pointer"
                  key={name?.id}
                >
                  <h5>{name?.name}</h5>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
