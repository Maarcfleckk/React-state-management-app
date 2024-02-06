import { useState } from "react";
import { Counter } from "./Counter.jsx";
import { Total } from "./Total.jsx";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementGood = () => {
    setGood((prevGood) => {
      prevGood = prevGood + 1;
      return prevGood;
    });
  };
  const handleIncrementNeutral = () => {
    setNeutral((prevNeutral) => {
      prevNeutral = prevNeutral + 1;
      return prevNeutral;
    });
  };
  const handleIncrementBad = () => {
    setBad((prevBad) => {
      prevBad = prevBad + 1;
      return prevBad;
    });
  };
  let total = good + neutral + bad;
  
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleIncrementGood}>good</button>
      <button onClick={handleIncrementNeutral}>neutral</button>
      <button onClick={handleIncrementBad}>bad</button>
      <h1>statistics</h1>
      <Counter counter={good} name={"good"} />
      <Counter counter={neutral} name={"neutral"} />
      <Counter counter={bad} name={"bad"} />
      <Total total={total} />
    </div>
  );
};

export default App;
