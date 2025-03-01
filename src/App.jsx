import Netflix from "./components/Netflix";
import "./components/css/Netflix.module.css";
import Events from "./components/Events";
import PassEvents from "./components/PassEvents";
import UseState from "./components/useState";
import StateWorks, { Sibling, User } from "./components/StateWorks";
import Passingprops from "./components/passingprops";
// import "../src/index.css";
export default function App() {
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 auto",
        }}
      >
        <Netflix />
      </div> */}

      {/* <Events /> */}
      {/* <PassEvents /> */}
      {/* <Newcomponenet /> */}
      {/* <Passingprops /> */}
      {/* <UseState /> */}
      <StateWorks />
      <Sibling />
      <User />
    </>
  );
}
