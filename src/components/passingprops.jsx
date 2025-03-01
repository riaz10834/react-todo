import React from "react";

export default function Passingprops() {
  return (
    <Pass name="raiz" roll={32} details={<div>This is me</div>}>
      <p>This is paragraph</p>
      <h3>heading3</h3>
      <h2>heading2</h2>
      <h1>heading1</h1>
    </Pass>
  );
}

export const Pass = ({ name, roll, details, children }) => {
  return (
    <>
      <h1>{name}</h1>
      <h1>{roll}</h1>
      <h1>{details}</h1>
      <h1>{children}</h1>
    </>
  );
};
