import React, { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <p>Items in cart : {cartItems.toString()}</p>
      <button
        onClick={() => {
         setCartItems([...cartItems, "xbox"]);
        }}
      >
        Add Item
      </button>
    </div>
  );
}
