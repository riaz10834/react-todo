import React from "react";
import students from "../api/studentData.json";
import Net from "./Net";

export default function Netflix() {
  return (
    <>
      {students.map((data) => {
        return (
          <>
            <div>
              <Net studentdetail={data} />
            </div>
          </>
        );
      })}
    </>
  );
}

{
  /* <img src={students[0].pic} alt="" />
      <h1>{students[0].name}</h1>
      <h1>{students[0].ID}</h1>
      <h1>{students[0].class}</h1> */
}

export const Newcomponenet = () => {
  return (
    <>
      {students.map((data) => {
        return (
          <>
            <h1>{data.name}</h1>
          </>
        );
      })}
    </>
  );
};
