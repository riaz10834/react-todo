import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const btn = {
    background: "aqua",
    padding: "10px 20px",
    fontSize: "20px",
    marginLeft: "10px",
  };
  const increment = () => {
    setCount(() => count + 1);
  };
  const decrement = () => {
    setCount(() => count - 1);
  };
  return (
    <>
      <div className="mx-auto  mt-[200px]  flex flex-col justify-center items-center  gap-3">
        <h1 style={{ fontSize: "30px", marginLeft: "50px" }}>{count}</h1>
        <div className=" w-[200px] flex">
          <button style={btn} onClick={increment}>
            Increase
          </button>
          <button style={btn} onClick={decrement}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default UseState;
