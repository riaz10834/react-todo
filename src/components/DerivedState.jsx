import { useState } from "react";
export const Derived = () => {
  const [students, setStudent] = useState([
    { name: "riaz", class: 9, rollno: 12, marks: 50 },
    { name: "sami", class: 3, rollno: 12, marks: 80 },
    { name: "bilal", class: 7, rollno: 12, marks: 90 },
  ]);

  const stu = students.length;

  const average = Math.floor(
    students.reduce((state, student) => state + student.marks, 0)
  );
  // const res = Math.floor(Math.random(0, 100) * 4);

  return (
    <>
      {students.map((stud) => {
        return (
          <>
            <h1>Name is : {stud.name}</h1>
            <h1>Class is : {stud.class}</h1>
            <h1>Roll No is : {stud.rollno}</h1>
            <h1>Marks is: {stud.marks}</h1>
            <hr />
          </>
        );
      })}
      <h1 style={{ color: "red" }}>Total users: {stu}</h1>
      <h1 style={{ color: "blue" }}>Total Marks: {average}</h1>
      {/* <h1>Random no {res}</h1> */}
    </>
  );
};
