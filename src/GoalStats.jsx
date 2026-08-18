function GoalStats({ goals }) {
  const totalGoals = goals.length;

  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

  const pendingGoals = totalGoals - completedGoals;

  const completionPercentage =
    totalGoals === 0
      ? 0
      : Math.round((completedGoals / totalGoals) * 100);

  return (
    <div>
      <h2>Goal Summary</h2>

      <p>🎯 Total Goals: {totalGoals}</p>

      <p>✅ Completed: {completedGoals}</p>

      <p>⏳ Pending: {pendingGoals}</p>

      <p>📊 Completion: {completionPercentage}%</p>
    </div>
  );
}

export default GoalStats;