import { fileData } from "../lib/data/file";

const File = () => {
  return (
    <div>
      <List file={fileData} />
    </div>
  );
};

export default File;

const List = ({ files }) => {
  return (
    <div>
      {files?.map((file) => (
        <div key={file.id}>
          <span>{file.name}</span>
        </div>
      ))}
    </div>
  );
};
