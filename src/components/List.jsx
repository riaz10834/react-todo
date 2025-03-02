import React, { useState } from "react";

function List() {
  const [inputvalue, setInputValue] = useState("");
  const [adress, setAdress] = useState("");
  const [F_Name, setF_Name] = useState("");
  const [task, setTask] = useState([]);

  const handleadd = (event) => {
    event.preventDefault();
    if (!adress) return;
    setTask([...task, { name: inputvalue, adress, F_Name }]);
    setInputValue("");
    setAdress("");
    setF_Name("");
  };
  console.log(task);

  return (
    <>
      <form onSubmit={handleadd} className="form">
        <input
          type="text"
          className="input2"
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          className="input2"
          value={F_Name}
          onChange={(e) => setF_Name(e.target.value)}
          placeholder="F/Name"
        />
        <input
          type="text"
          className="input2"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          placeholder="Adress"
        />
        <button className="input2" style={{ cursor: "pointer" }}>
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none" }}>
        {task.map((result) => {
          return (
            <div style={{ margin: "10px 0" }}>
              <li className="li2">Name is : {result.name}</li>
              <li className="li2">F/Name is : {result.F_Name}</li>
              <li className="li2">Adress is : {result.adress}</li>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default List;
