import React, { useState } from "react";

export default function LiftingState() {
  const [value, setValue] = useState("");
  return (
    <>
      <Input input={value} set={setValue} />
      <Display input={value} />
    </>
  );
}

export const Input = ({ input, set }) => {
  return (
    <>
      <input type="text" value={input} onChange={(e) => set(e.target.value)} />
    </>
  );
};

export const Display = ({ input }) => {
  return (
    <>
      <h1>Your input data is : {input}</h1>
    </>
  );
};
