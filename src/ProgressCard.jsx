
function ProgressCard({ title, completed, total, onIncrease, onDecrease }) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="progress-card">
      {/* Skill Title */}
      <h2>{title}</h2>

      {/* Completed Problems */}
      <p>
        {completed} / {total}
      </p>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Progress Percentage */}
      <p>{percentage}% Complete</p>

      {/* Progress Status */}
      {completed === 0 ? (
        <p>🔴 Not Started</p>
      ) : completed >= total ? (
        <p>🟢 Completed</p>
      ) : (
        <p>🟡 In Progress</p>
      )}

      {/* Progress Buttons */}
      <div className="progress-buttons">
        <button
          onClick={onIncrease}
          disabled={completed >= total}
        >
          +1 Problem
        </button>

        <button
          onClick={onDecrease}
          disabled={completed <= 0}
        >
          -1 Problem
        </button>
      </div>
    </div>
  );
}

export default ProgressCard;