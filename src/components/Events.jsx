import React from "react";
import styled from "styled-components";
export default function Events() {
  const showalert = (user, age) => {
    alert("My name is " + user + " And age is " + age);
  };
  //   const button = {
  //     background: "red",
  //     color: "green",
  //   };
  const rating = 5;
  const Btn = styled.button`
    color: "black",
    background: "red",
  `;
  return (
    <>
      <Btn onClick={showalert}>Click me</Btn>
      <Btn onClick={() => showalert("riaz", 34)}>Click me 2</Btn>
    </>
  );
}
