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

export const User = () => {
  const [student, setStudent] = useState([
    { name: "riaz", class: 9, rollno: 12, age: 20 },
    { name: "sami", class: 3, rollno: 12, age: 26 },
    { name: "bilal", class: 7, rollno: 12, age: 34 },
  ]);

  const stu = student.length;
  console.log(stu);
  const average = Math.floor(
    student.reduce((first, agee) => first + agee.age, 0) / stu
  );
  // const res = Math.floor(Math.random(0, 100) * 4);

  return (
    <>
      {student.map((stu) => {
        return (
          <>
            <h1>{stu.name}</h1>
            <h1>{stu.class}</h1>
            <h1>{stu.rollno}</h1>
          </>
        );
      })}
      <h1>Total users: {stu}</h1>
      <h1>Total age: {average}</h1>
      {/* <h1>Random no {res}</h1> */}
    </>
  );
};
