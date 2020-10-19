import React, { useContext, useState, useEffect } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from '../hooks/useMousePosition'



const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  //setUp state to track x and y position (useState)
  //SetUp event to listen for mouse movement
  //remove evemt listener if unmounted (useEffect)

  return (
    <div>
      <h3>{note.title}</h3>
      <h3>{note.content}</h3>
      <p>
        {position.x},{position.y}
      </p>
      <button
        onClick={() => dispatch({ type: "REMOVE_NOTE", title: note.title })}
      >
        x
      </button>
    </div>
  );
};
export default Note;
