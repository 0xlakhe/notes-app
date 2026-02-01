import React, { useState } from "react";

const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-3 lg:w-full  p-20 w-"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      >
        <h1 className="text-2xl font-bold pb-5">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Heading"
          className="border-2 rounded p-2 border-white"
        />
        <textarea
          name=""
          id=""
          placeholder="Write here"
          className=" rounded border-2 p-2 border-white outline-none h-60"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button className="border p-2 bg-white rounded text-black">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNotes;
