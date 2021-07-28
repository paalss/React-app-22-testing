import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <>
      <h2>Hello world</h2>
      <p>rrrrrrrr</p>
      
      {!changeText && <Output>nooooo</Output>}
      {changeText && <Output>klikket!</Output>}
      <button onClick={changeTextHandler}>change text</button>
    </>
  );
};

export default Greeting;
