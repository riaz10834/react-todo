import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function Todo() {
  const [inputvalue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleinputvalue = (value) => {
    setInputValue(value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (!inputvalue) return;
    if (task.includes(inputvalue)) {
      setInputValue("");
      let con = prompt("Do you want to add again this task ? yes/no");
      if (con === "yes") {
        setTask([...task, inputvalue]);
      } else {
        return;
      }
    }
    // setTask((prevTask) => [...prevTask, inputvalue]);
    setTask([...task, inputvalue]);
    setInputValue("");
  };

  return (
    <section className="main">
      <h1
        style={{
          textAlign: "center",
          fontSize: "25px",
          textTransform: "uppercase",
        }}
      >
        Todo List
      </h1>
      <section>
        <form onSubmit={submit}>
          <div style={{ width: "400px" }} className="btnclass">
            <input
              type="text"
              autoComplete="off"
              value={inputvalue}
              className="input"
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button className="button">Add Task</button>
          </div>
        </form>

        <section className="desplay">
          <ul style={{ listStyle: "none" }}>
            {task.map((tas, index) => {
              return (
                <li className="li">
                  <span style={{ fontSize: "20px" }}>{tas}</span>
                  <button className="btn1">
                    <FaCheck />
                  </button>
                  <button className="btn2">
                    <MdDelete />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </section>
  );
}

// const arr = [3, 4, 5, 2, 4];
//sum all elements within an array
// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//   total = total + arr[i];
// }

// console.log("total:", total);

//second way to add the between numbers of array
// const arr = [3, 4, 5, 2, 4];
// let total = 0;
// for (let i = 1; i < arr.length - 1; i++) {
//   total = total + arr[i];
// }

// console.log("total:", total);

// sum of all even numbers
// let sumOfEven = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sumOfEven = sumOfEven + arr[i];
//   }
// }
// console.log("sumOfEven");
// console.log(sumOfEven);

// // sum of all even numbers
// let oddNumber = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     oddNumber = oddNumber + arr[i];
//   }
// }
// console.log("oddNumber");
// console.log(oddNumber);

// sum of all even numbers

// const arr = [3, 4, 5, 2, 4];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {

// }
// const check = arr.slice(1, arr.length - 1);
// const result = check.reduce((state, val) => state + val, 0);
// console.log("arr");
// console.log(arr);
// console.log("checking...");
// console.log(check);
// console.log("result");
// console.log(result);

// console.log("sum");
// console.log(sum);

// const arr = [3, 4, 5, 2, 4];
// const filt = arr.filter((a) => a % 2 === 0);
// const filt = arr.slice(1, arr.length - 1);
// console.log(filt);
// const sum = filt.reduce((state, sumnumber) => state + sumnumber);
// console.log(sum);
