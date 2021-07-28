import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <>
      <h2>Hello world</h2>
      <p>rrrrrrrr</p>
      {!changeText && <p>nooooo</p>}
      {changeText && <p>klikket!</p>}
      <button onClick={changeTextHandler}>change text</button>
    </>
  );
};

export default Greeting;
