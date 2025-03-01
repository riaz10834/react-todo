import React, { useState } from "react";

export default function StateWorks() {
  const [count, setCount] = useState(0);
  const incre = () => {
    setCount(() => count + 1);
  };
  console.log("parent com");

  return (
    <>
      <h1>Event,usestate,propagation,module.css,styled.css,tailwind Css</h1>
      <h1>{count}</h1>
      <button onClick={incre}>Increase</button>
      <Childcom />
    </>
  );
}

export function Childcom() {
  console.log("Child com");

  return (
    <>
      <h1>Child</h1>
    </>
  );
}
export function Sibling() {
  console.log("Sibling com");

  return (
    <>
      <h1>Sibling</h1>
    </>
  );
}
