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
      title:"JavaScript",
      completed: 25,
      total: 50
    },
    {
      title:"CSS",
      completed: 30,
      total: 40
    }

  ];

  return (
    <div>
      <Navbar />

      <h1>Welcome to CodeTrack</h1>
      <p>My developer progress tracker</p>

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