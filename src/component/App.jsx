import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((preValue) => [...preValue, newNote]);
  }
  console.log(notes);

  function postNote(note, index) {
    return (
      <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onClick={deleteNote}
      />
    );
  }

  function deleteNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addNote} />
      {notes.map(postNote)}
      <Footer />
    </div>
  );
}

export default App;