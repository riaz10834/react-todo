import React, { useState } from "react";
export default function Toogle() {
  const [isOn, setIsOn] = useState(false);
  const text = () => {
    setIsOn(!isOn);
    if (isOn) {
      document.body.style.background = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.background = "black";
      document.body.style.color = "white";
    }
  };
  return (
    <>
      <div className={`toggle ${isOn ? "bg" : ""}`} onClick={text}>
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="state">{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>
    </>
  );
}
