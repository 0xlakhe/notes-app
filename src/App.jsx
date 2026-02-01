import React from "react";
import AddNotes from "./assets/AddNotes";
import Notes from "./components/Notes";

const App = () => {
  return (
    <div className="bg-zinc-900 lg:flex  justify-center min-h-screen text-white p-10">
      <AddNotes />
      <Notes />
    </div>
  );
};

export default App;
