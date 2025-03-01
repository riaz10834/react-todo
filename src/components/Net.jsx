import React from "react";
import styles from "../components/css/Netflix.module.css";
import styled from "styled-components";
export default function Net({ studentdetail }) {
  const { ID, pic, name, link, classs } = studentdetail;
  const sty = ID > 10 ? styles.id1 : styles.id2;
  const Pera = styled.p({
    color: "red",
    fontSize: "20px",
  });
  // const Button = styled.button({
  //   padding: "10px 20px",
  //   background: "black",
  //   color: "white",
  // });
  const Button = styled.button`
    padding: 10xp 20px;
    background: black;
    color: blue;
  `;
  return (
    <>
      <div className={styles.box}>
        <img src={pic} alt="" className={styles.img} />

        <h2>Name is : {name}</h2>
        <h2>
          ID is
          <span
            className={sty}
            style={{
              padding: "5px 10px",
              borderRadius: "10px",
              marginLeft: "20px",
            }}
          >
            {ID}
          </span>
        </h2>
        <h2>Class is : {classs}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos amet
          neque aliquid vitae cum assumenda voluptatem vero dolores rem harum.
        </p>

        <button
          className={sty}
          style={{
            padding: "10px 20px",
            fontSize: "15px",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <a href={link} className={styles.show}>
            Show more
          </a>
        </button>
      </div>
      <Pera>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        delectus, maxime explicabo odio illum impedit fugit dolorum laboriosam
        possimus quos, sunt voluptate ullam autem ipsa doloribus eveniet
        expedita tempore commodi.
      </Pera>
      <Button>Submit</Button>
    </>
  );
}
