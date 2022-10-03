import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { v4 as uuid } from "uuid";

function App() {
  const [notes, updateNotes] = useState([]);

  const handleAddNote = (event) => {
    const id = createId();

    updateNotes((prev) => {
      return [...prev, { id, title: event.title, content: event.content }];
    });
  };

  const handleDelete = (id) => {
    updateNotes((prev) => {
      return prev.filter((note) => {
        return note.id !== id;
      });
    });
  };

  const createId = () => {
    return uuid();
  };
  return (
    <div>
      <Header />
      <CreateArea addNote={handleAddNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          title={note.title}
          content={note.content}
          deleteNote={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
