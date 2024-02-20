import { useState } from "react";
import { Statistics } from "./Statistics.jsx";
import { Button } from "./Button.jsx";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selectedAnecdote, setAnecdote] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const maxVotesIndex = votes.indexOf(Math.max(...votes));

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
  const handleRandom = () => {
    setAnecdote((prevAnecdote) => {
      prevAnecdote = Math.floor(Math.random() * anecdotes.length);
      return prevAnecdote;
    });
  };
  const handleVote = () => {
    setVotes((prevVotes) => {
      const newVotes = [...prevVotes];
      newVotes[selectedAnecdote] += 1;
      return newVotes;
    });
  };

  let total = good + neutral + bad;
  let result = good - bad;
  return (
    <>
      <h1>react state management app</h1>
      <div>
        <h2>give feedback</h2>
        <Button callback={handleIncrementGood} text={"good"} />
        <Button callback={handleIncrementNeutral} text={"neutral"} />
        <Button callback={handleIncrementBad} text={"bad"} />
        <h3>statistics</h3>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          result={result}
        />
      </div>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selectedAnecdote]}</p>
        <p>has {votes[selectedAnecdote]} votes</p>
        <button
          onClick={() => {
            handleVote();
            handleMostVotes();
          }}
        >
          vote
        </button>
        <button onClick={handleRandom}>next anecdote</button>
      </div>
      <div>
        <h3>Anecdote with most votes</h3>
        <p>{anecdotes[maxVotesIndex]}</p>
        <p>has {votes[maxVotesIndex]} votes</p>
      </div>
    </>
  );
};

export default App;
