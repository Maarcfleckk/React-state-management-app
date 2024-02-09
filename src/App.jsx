import { useState } from "react";
import { Statistics } from "./Statistics.jsx";
import { Button } from "./Button.jsx";
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
  let result = good - bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button callback={handleIncrementGood} text={"good"} />
      <Button callback={handleIncrementNeutral} text={"neutral"} />
      <Button callback={handleIncrementBad} text={"bad"} />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        result={result}
      />
    </div>
  );
};

export default App;
