import React from "react";

function Note(props) {
  function handleClick() {
    console.log("in notes; id: " + props._id);
    props.deleteNote(props._id); //  function to call the callback function delete a note when button is pressed based on button id
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
