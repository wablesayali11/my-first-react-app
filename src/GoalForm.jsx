import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [goal, setGoal] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (goal.trim() === "") {
      return;
    }

    onAddGoal(goal);

    setGoal("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your goal"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
      />

      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;