// import React, { useState, useEffect } from "react";

// const App = (props) => {
//     const [count, setCount] = useState(props.count);
//     const [text, setText] = useState("");
  
//     useEffect(() => {
//       console.log("use Effect ran");
//       document.title = count;
//     });
  
//     return (
//       <div>
//         <p>
//           The current {text || "count"} is {count}
//         </p>
//         <button onClick={() => setCount(count + 1)}> +1 </button>
//         <button onClick={() => setCount(props.count)}> reset </button>
//         <button onClick={() => setCount(count - 1)}> -1 </button>
//         <input value={text} onChange={(e) => setText(e.target.value)} />
//       </div>
//     );
//   };