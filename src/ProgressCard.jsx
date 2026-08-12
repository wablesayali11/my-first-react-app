import { useState } from "react";

function ProgressCard(props) {
  const [completed, setCompleted] = useState(props.completed);

  function increaseProgress() {
    if (completed < props.total) {
      setCompleted(completed + 1);
    }
  }

  function decreaseProgress() {
    if (completed > 0) {
      setCompleted(completed - 1);
    }
  }

  return (
    <div>
      <h2>{props.title}</h2>

      <p>
        {completed} / {props.total}
      </p>

    {completed === 0 ? (
  <p>🔴 Not Started</p>
) : completed === props.total ? (
  <p>🟢 Completed</p>
) : (
  <p>🟡 In Progress</p>
)}
      {completed===props.total&&(<p>Goal Achieved!</p>)}

      <button onClick={increaseProgress}>
        +1 Problem
      </button>

      <button onClick={decreaseProgress}>
        -1 Problem
      </button>
    </div>
  );
}

export default ProgressCard;