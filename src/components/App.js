import React, { useEffect, useState } from "react";
import '../styles/App.css';

export default function App() {
  let [count, setCount] = useState(0);

  return (
    <div class="ball">
      <h1
        class="count"
        onDoubleclick={() => {
          alert("cant edit it");
        }}
      >
        {count}
      </h1>
      <button
        class="increment-button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
