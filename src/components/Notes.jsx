import React from "react";

const Notes = () => {
  return (
    <div className="lg:w-full border-white lg:border-l-2 overflow-hidden pt-20 px-10 ">
      <h1 className=" text-2xl font-bold px-5">Your Notes</h1>
      <div className="flex flex-wrap gap-5 h-full overflow-auto pt-8 pl-5">
        <div className="h-52 w-40 bg-white rounded-2xl"></div>
        <div className="h-52 w-40 bg-white rounded-2xl"></div>
        <div className="h-52 w-40 bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Notes;
