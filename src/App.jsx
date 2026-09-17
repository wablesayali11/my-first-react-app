
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Quote from "./Quote.jsx";
import GoalStats from "./GoalStats.jsx";
import GoalForm from "./GoalForm.jsx";
import GoalItem from "./GoalItem.jsx";
import Navbar from "./Navbar.jsx";
import ProgressCard from "./ProgressCard.jsx";

import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./App.css";

function App() {
  // Load saved skills from localStorage
  const [skills, setSkills] = useState(() => {
    const savedSkills = localStorage.getItem("skills");

    return savedSkills
      ? JSON.parse(savedSkills)
      : [
          { title: "DSA", completed: 42, total: 100 },
          { title: "React", completed: 10, total: 50 },
          { title: "Java", completed: 20, total: 50 },
          { title: "Python", completed: 15, total: 50 },
          { title: "JavaScript", completed: 25, total: 50 },
          { title: "CSS", completed: 30, total: 40 }
        ];
  });

  // Load saved goals from localStorage
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");

    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  // Save skills whenever skills change
  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  // Save goals whenever goals change
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  // Increase skill progress
  function increaseProgress(skillTitle) {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.title === skillTitle &&
        skill.completed < skill.total
          ? { ...skill, completed: skill.completed + 1 }
          : skill
      )
    );
  }

  // Decrease skill progress
  function decreaseProgress(skillTitle) {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.title === skillTitle &&
        skill.completed > 0
          ? { ...skill, completed: skill.completed - 1 }
          : skill
      )
    );
  }

  // Add a new goal
  function addGoal(newGoal) {
    const newGoalObject = {
      text: newGoal,
      completed: false
    };

    setGoals((prevGoals) => [...prevGoals, newGoalObject]);
  }

  // Complete or uncomplete a goal
  function completeGoal(indexToComplete) {
    setGoals((prevGoals) =>
      prevGoals.map((goal, index) =>
        index === indexToComplete
          ? { ...goal, completed: !goal.completed }
          : goal
      )
    );
  }

  // Delete a goal
  function deleteGoal(indexToDelete) {
    setGoals((prevGoals) =>
      prevGoals.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar />

        {/* Page Navigation */}
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to CodeTrack</h1>
                <p>My developer progress tracker</p>

                <Quote />

                <h2>Today's Goals</h2>
                <GoalForm onAddGoal={addGoal} />

                <GoalStats goals={goals} />

                {/* Display Goals */}
                <h3>Your Goals</h3>

                <ul>
                  {goals.map((goal, index) => (
                    <GoalItem
                      key={index}
                      goal={goal}
                      index={index}
                      onDelete={deleteGoal}
                      onComplete={completeGoal}
                    />
                  ))}
                </ul>

                {/* Progress Cards */}
                {skills.map((skill) => (
                  <ProgressCard
                    key={skill.title}
                    title={skill.title}
                    completed={skill.completed}
                    total={skill.total}
                    onIncrease={() =>
                      increaseProgress(skill.title)
                    }
                    onDecrease={() =>
                      decreaseProgress(skill.title)
                    }
                  />
                ))}
              </div>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* 404 Page */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;