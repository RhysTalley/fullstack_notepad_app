import React, { useState } from "react";

function CreateNote({ updateNotes }) {
  const [title, setTitle] = useState(""); // usestate for the title field
  const [content, setContent] = useState(""); // usestate for the content field

  function titleChange(event) {
    // dynamically update the title
    setTitle(event.target.value);
  }

  function contentChange(event) {
    // dynamically update the content
    setContent(event.target.value);
  }

  function handleClick() {
    // creates a new note, through the callback function updateNotes() and resets input fields
    updateNotes(title, content);
    setTitle("");
    setContent("");
    document.getElementById("titleinput").value = "";
    document.getElementById("messageinput").value = "";
  }

  return (
    <div className="noteInput">
      <input id="titleinput" placeholder="Title" onChange={titleChange} />
      <input id="messageinput" placeholder="Message" onChange={contentChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default CreateNote;
