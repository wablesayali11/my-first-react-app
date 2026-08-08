import { useState } from "react";

function ProgressCard(props) {
  const [completed, setCompleted] = useState(props.completed);

  function increaseProgress() {
    setCompleted(completed + 1);
  }
  function decreaseProgress() {
    setCompleted(completed - 1);
  }


  return (
    <div>
      <h2>{props.title}</h2>

      <p>
        {completed} / {props.total}
      </p>

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