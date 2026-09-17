import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About CodeTrack</h1>
      <p>CodeTrack helps me track my coding progress.</p>

      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

export default About;