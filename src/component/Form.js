import React, { useState,useContext } from "react";
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'
//In order for me to use the dispatch it needs to be passed as props then destructured

const Form = () => {
  const {dispatch} = useContext(NotesContext)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const position = useMousePosition()

  const addNote = (e) => {
    e.preventDefault();
    //With a useReducer Hook
    dispatch({
      type: "ADD_NOTES",
      title,
      content,
    });

    //This is with a useState Hook
    // setNotes([...notes, { title, content }]);

    setTitle(" ");
    setContent("");
  };
  return (
    <>
    <h5>Add Note {position.x} - {position.y} </h5>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>add note</button>
      </form>
    </>
  );
};
export default Form;
