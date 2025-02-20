"use client";
import { useState } from "react";
import { fileData } from "../lib/data/file";
import { RiFileAddLine } from "react-icons/ri";

const handleAddFile = (id) => {
  console.log(id);
};
const File = () => {
  const [data, setData] = useState(fileData);
  return (
    <div className="select-none">
      <List files={data} />
    </div>
  );
};

export default File;

const List = ({ files }) => {
  const [isExpand, setIsExpand] = useState({});
  return (
    <div>
      {files?.map((file) => (
        <div key={file.id} className="ps-5">
          <div className={` flex justify-start items-center gap-1`}>
            {file?.isFile && (
              <span
                onClick={() =>
                  setIsExpand((prev) => ({
                    ...prev,
                    [file.name]: !prev?.[file.name],
                  }))
                }
                className={`text-xl font-semibold cursor-pointer transition-all duration-300 ${
                  isExpand?.[file?.name] ? "rotate-90" : ""
                }`}
              >
                {">"}
              </span>
            )}
            <span>{file.name}</span>
            {file?.isFile && (
              <RiFileAddLine
                onClick={() => handleAddFile(file?.id)}
                className="cursor-pointer"
              />
            )}
          </div>
          <div className={`${isExpand?.[file.name] ? "block" : "hidden"}`}>
            {file?.children && <List files={file?.children} />}
          </div>
        </div>
      ))}
    </div>
  );
};
