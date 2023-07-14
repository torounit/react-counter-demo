import "./styles.css";
import { useState } from "react";
import { Counter } from "./components/Counter";
import Main from "./components/Main";

export default function App() {
  const [value, setValue] = useState(0);
  const onClickHandler = () => {
    setValue(value + 1);
  };
  return (
    <div className="App">
      <Main>
        <h1>Counter!!!</h1>
        <Counter value={value} onClick={onClickHandler} />
        <Counter value={value} onClick={onClickHandler} />
        <Counter value={value} onClick={onClickHandler} />
      </Main>
    </div>
  );
}
