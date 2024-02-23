import React from "react";

const DeleteConnection = () => {
  return (
    <div className="bg-white w-[350px] items-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] p-7 flex flex-col rounded-md m-auto">
      <h3 className="text-lg font-semibold mt-3 text-center">
        Facebook Page Integration
      </h3>
      <h3 className="text-md mt-1 mb-4 text-center">
        Integrated Page:{" "}
        {<span className="font-semibold">Amazon Business</span>}
      </h3>
      <button className="mx-auto w-full text-white font-semibold mt-3 p-2 bg-[#cf3838] rounded-md">
        Delete Integration
      </button>
      <button className="mx-auto w-full text-white font-semibold mt-3 p-2 bg-[#1e4d91] rounded-md">
        Reply to messages
      </button>
    </div>
  );
};

export default DeleteConnection;
