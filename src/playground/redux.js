import { bindActionCreators, createStore } from "redux";

const store = createStore((state = { count: 0 }) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});

store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "DECREMENT",
});

store.dispatch({
  type: "RESET",
});
console.log(store.getState());
