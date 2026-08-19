function ProgressCard({ title, completed, total }) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div>
      <h2>{title}</h2>

      <p>
        {completed} / {total}
      </p>

      <div
        style={{
          width: "300px",
          height: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "green"
          }}
        ></div>
      </div>

      <p>{percentage}% Complete</p>

      {completed === 0 ? (
        <p>🔴 Not Started</p>
      ) : completed === total ? (
        <p>🟢 Completed</p>
      ) : (
        <p>🟡 In Progress</p>
      )}

      <button>+1 Problem</button>
      <button>-1 Problem</button>
    </div>
  );
}

export default ProgressCard;