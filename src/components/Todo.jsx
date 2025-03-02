import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function Todo() {
  const [inputvalue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [datetime, setDateTime] = useState("");

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
  setInterval(() => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    setDateTime(`${date} - ${time}`);
  }, 1000);

  const handledeletebtn = (value) => {
    // console.log(value);
    const updated = task.filter((remove) => remove !== value);
    setTask(updated);
  };

  const handleclearbtn = () => {
    setTask([]);
  };
  return (
    <section className="main">
      <h1
        style={{
          fontSize: "25px",
          textTransform: "uppercase",
        }}
      >
        Todo List Project
      </h1>
      <h2
        style={{
          textTransform: "uppercase",
        }}
      >
        {datetime}
      </h2>
      <section>
        <form onSubmit={submit} className="form">
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
                  <button className="btn2" onClick={() => handledeletebtn(tas)}>
                    <MdDelete />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
      <button className="clearbtn" onClick={handleclearbtn}>
        Clear All
      </button>
    </section>
  );
}
