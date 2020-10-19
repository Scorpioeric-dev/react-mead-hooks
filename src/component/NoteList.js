import React, { useContext } from "react";
import NotesContext from "../context/notes-context";
import Notes from "./Notes";

const NoteList = ({  }) => {
  const {notes} = useContext(NotesContext);
  return notes.map((note) => (
    <Notes key={note.title} note={note}  />
  ));
};

export default NoteList;
