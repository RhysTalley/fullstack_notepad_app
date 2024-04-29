import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]); // dynamic usestate to keep track of current notes

  useEffect(() => { // useEffect() renders all initial notes through a get request to our backend
    axios.get(`http://localhost:8000/notes`).then((res) => {
      setNotes(res.data);
    }).catch((err) => {
      console.log(err);
    });
  });

  function handleCreateNote(title, content) {
    // function to be passed to createNote() to add notes based on user inputs. Calls backend to post a new note. TITLE and CONTENT names are important
    axios.post(`http://localhost:8000/notes`, { title, content }).then((res) => {
      console.log(res.data);
      setNotes([...notes, res.data]);
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleDeleteNote(_id){ // delete function. 
    axios.delete(`http://localhost:8000/notes/${_id}`).then((res) => { // makes delete request through specific id of note
      console.log(res.data);
      setNotes(notes.filter((note) => note._id !== _id)); // then deletes this note from the useState() in the frontend
    }).catch((err) => {
      console.log(err);
    });
  }


  function addNote(note) {
    // function to map all note entries in array to actual notes
    return (
      <Note
        _id={note._id} // we now ensure to use "_id" instead of "id" as before
        title={note.title}
        content={note.content}
        deleteNote={handleDeleteNote}
      />
    );
  }

  return (
    <div className="pageDisplay">
      <Header />
      <CreateNote updateNotes={handleCreateNote} />
      <div className="noteList">
        <dl>{notes.map(addNote)}</dl>
      </div>
      <Footer />
    </div>
  );
}

export default App;
