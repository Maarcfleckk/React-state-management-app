import { Counter } from "./Counter.jsx";
import { Total } from "./Total.jsx";
import { Average } from "./Average.jsx";
import { Positive } from "./Positive.jsx";

export const Statistics = ({ good, neutral, bad, total, result }) => {
  return (
    <div>
      <Counter counter={good} name={"good"} />
      <Counter counter={neutral} name={"neutral"} />
      <Counter counter={bad} name={"bad"} />
      <Total total={total} />
      <Average total={total} result={result} />
      <Positive total={total} good={good} />
    </div>
  );
};
