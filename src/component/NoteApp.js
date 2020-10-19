import React, { useEffect, useReducer } from "react";
import notesReducer from "../ducks/notesReducer";
import NoteList from "./NoteList";
import Form from './Form'
import NotesContext from '../context/notes-context'
import Cart from './Cart'

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem("notes"));
  const [notes, dispatch] = useReducer(notesReducer, []);
  
  


  //Use Effect Local Storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notesData) {
      dispatch({ type: "POPULATE_NOTES", notes: notesData });
      // setNotes(notesData);
    }
  }, []);
//With the provider -- it gives access to any jsx tag etc. to consume it 
  return (
    <NotesContext.Provider value={{notes,dispatch}}>
      <h3>Notes</h3>
      <NoteList />
      <Form />
      <Cart/>
    </NotesContext.Provider>
  );
};
export default NoteApp;
