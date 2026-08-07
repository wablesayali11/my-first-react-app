import Navbar from "./Navbar";
import ProgressCard from "./ProgressCard";

function App() {
  return (
    <div>
      <Navbar />

      <h1>Welcome to CodeTrack</h1>
      <p>My developer progress tracker</p>

      <ProgressCard
  title="DSA"
  completed={42}
  total={100}
/>

<ProgressCard
  title="React"
  completed={10}
  total={50}
/>

<ProgressCard
  title="Java"
  completed={20}
  total={50}
/>

<ProgressCard
  title="Python"
  completed={15}
  total={50}
/>

<ProgressCard
  title="HTML"
  completed={30}
  total={40}
/>
    </div>
  );
}

export default App;