import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    setTitle("");
    setDetails("");
  };
  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
    console.log("Deleted");
  };
  return (
    <div className="AddNotes bg-zinc-900 lg:flex  justify-center h-screen text-white p-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-3 lg:w-full  p-20 w-"
      >
        <h1 className="text-2xl font-bold pb-5">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Heading"
          className="border-2 rounded p-2 border-white"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
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
        <button className=" border p-2 bg-white active:scale-99 rounded text-black active:bg-gray-300 hover:cursor-pointer">
          Add Note
        </button>
      </form>
      <div className="ShowNotes lg:w-full  border-white lg:border-l-2  pt-20 px-10 overflow:auto">
        <h1 className=" text-2xl font-bold px-5">Your Notes</h1>
        <div className="flex flex-wrap gap-5 h-full overflow-auto pt-8 pl-5">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 w-40 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] rounded-2xl relative overflow-auto "
              >
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="z-999 active:bg-gray-900 hover:cursor-pointer active:scale-95 absolute top-1 right-2 text-gray-400 bg-gray-800 w-fit rounded-2xl m-2"
                >
                  <X size={16} />
                </button>
                <h1 className="top-1 font-bold flex items-center justify-center absolute p-1 mt-2 text-zinc-900 border-b-2 w-full">
                  {elem.title}
                </h1>
                <p className="absolute top-13  left-2 text-gray-500">
                  {elem.details}
                </p>
              </div>
            );
          })}
          {/* <div className="h-52 w-40 bg-white rounded-2xl"></div>
          <div className="h-52 w-40 bg-white rounded-2xl"></div>
          <div className="h-52 w-40 bg-white rounded-2xl"></div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
