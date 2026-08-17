function GoalItem({ goal, onDelete, onComplete, index }) {
  return (
    <li>
      <span
        style={{
          textDecoration: goal.completed
            ? "line-through"
            : "none"
        }}
      >
        {goal.text}
      </span>

      <button onClick={() => onComplete(index)}>
        {goal.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => onDelete(index)}>
        Delete
      </button>
    </li>
  );
}

export default GoalItem;