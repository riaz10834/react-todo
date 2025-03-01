import React from "react";
import styled from "styled-components";

export default function PassEvents() {
  const welcome = (user) => {
    alert(` ${user} This is onClick Event`);
  };
  const enter = () => {
    alert(`This is Enter `);
  };
  const styled = {
    padding: "10px 20px",
    background: "red",
    margin: "10px",
  };
  return (
    <>
      <Passing
        sty={styled}
        onClick={() => welcome("riaz")}
        onMouseEnter={enter}
      />
      <Propagation />
    </>
  );
}

const Passing = (props) => {
  return (
    <>
      <button style={props.sty} onClick={props.onClick}>
        Click
      </button>
      <button style={props.sty} onMouseEnter={props.onMouseEnter}>
        Enter Click
      </button>
      <button style={props.sty} onMouseOver={() => alert("OnMouseOver")}>
        onMouseOver
      </button>

      <button style={props.sty} onMouseUp={() => alert("OnMouseUp")}>
        onMouseUp
      </button>
      <button style={props.sty} onMouseDown={() => alert("OnMouseDown")}>
        onMouseDown
      </button>
      <button style={props.sty} onMouseMove={() => alert("OnMouseMove")}>
        onMouseMove
      </button>

      <button style={props.sty} onMouseOut={() => alert("OnMouseOut")}>
        onMouseOut
      </button>
      <button style={props.sty} onMouseLeave={() => alert("OnMouseLeave")}>
        onMouseLeave
      </button>
    </>
  );
};

export const Propagation = () => {
  const child = (event) => {
    // event.stopPropagation();
    console.log("Child");
  };
  const grant_parent = (event) => {
    console.log("grant_parent");
    // event.stopPropagation();
  };
  const parent = (event) => {
    console.log("parent");
    // event.stopPropagation();
  };
  return (
    <>
      <div
        onClick={grant_parent}
        style={{
          width: "400px",
          height: "400px",
          background: "blue",
          display: "grid",
          placeItems: "center",
          margin: "100px",
        }}
      >
        grant parent
        <div
          onClick={parent}
          style={{
            width: "300px",
            height: "300px",
            background: "green",
            display: "grid",
            placeItems: "center",
          }}
        >
          parent
          <div
            onClick={child}
            style={{
              width: "200px",
              height: "200px",
              background: "yellow",
              textAlign: "center",
            }}
          >
            Child
          </div>
        </div>
      </div>
    </>
  );
};
