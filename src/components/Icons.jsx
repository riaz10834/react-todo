import React from "react";
import { IoMdSwitch } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Display } from "./LiftingState";

function Icons() {
  const sty = {
    display: "flex",
    width: "200px",
    justifyContent: "space-around",
  };
  return (
    <>
      <h1 style={sty}>
        Home
        <IoHome />
      </h1>
      <h1 style={sty}>
        User
        <FaUserTie />
      </h1>
      <h1 style={sty}>
        Contact
        <FaPhoneAlt />
      </h1>
      <h1 style={sty}>
        Switch
        <IoMdSwitch />
      </h1>
    </>
  );
}

export default Icons;
