import { useState } from "react";
import GoalForm from "./GoalForm.jsx";
import Navbar from "./Navbar.jsx";
import ProgressCard from "./ProgressCard.jsx";

function App() {
  const skills = [
    {
      title: "DSA",
      completed: 42,
      total: 100
    },
    {
      title: "React",
      completed: 10,
      total: 50
    },
    {
      title: "Java",
      completed: 20,
      total: 50
    },
    {
      title: "Python",
      completed: 15,
      total: 50
    },
    {
      title: "JavaScript",
      completed: 25,
      total: 50
    },
    {
      title: "CSS",
      completed: 30,
      total: 40
    }
  ];

  // Store goals
  const [goals, setGoals] = useState([]);

  // Add a new goal
  function addGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }
  function deleteGoal(indexToDelete) {
  setGoals(goals.filter((_, index) => index !== indexToDelete));
}

  return (
    <div>
      <Navbar />

      <h1>Welcome to CodeTrack</h1>
      <p>My developer progress tracker</p>

      <h2>Today's Goals</h2>

      {/* Goal Form */}
      <GoalForm onAddGoal={addGoal} />
      

      {/* Display Goals */}
      <h3>Your Goals</h3>

     <ul>
     {goals.map((goal, index) => (
      <li key={index}>
     {goal}

      <button onClick={() => deleteGoal(index)}>
        Delete
      </button>
      </li>
    ))}
     </ul>

      {/* Progress Cards */}
      {skills.map((skill) => (
        <ProgressCard
          key={skill.title}
          title={skill.title}
          completed={skill.completed}
          total={skill.total}
        />
      ))}
    </div>
  );
}

export default App;