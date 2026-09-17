import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      <button onClick={() => navigate("/")}>
        Go Back Home
      </button>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default NotFound;