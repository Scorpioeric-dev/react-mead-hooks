const notesReducer = (state, action) => {
    switch (action.type) {
      case "POPULATE_NOTES":
        return action.notes;
      case "ADD_NOTES":
        return [...state, { title: action.title, content: action.content }];
      case "REMOVE_NOTE":
        return state.filter((note) => note.title !== action.title);
      default:
        return state;
    }
  };

  export default notesReducer