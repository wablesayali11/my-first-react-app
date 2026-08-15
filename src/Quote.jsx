import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchQuote() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://dummyjson.com/quotes/random"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      setError("Unable to load quote. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h2>💡 Developer Quote</h2>

      {loading && <p>Loading quote...</p>}

      {error && (
        <div>
          <p>{error}</p>

          <button onClick={fetchQuote}>
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <p>"{quote}"</p>
          <p>— {author}</p>

          <button onClick={fetchQuote}>
            New Quote
          </button>
        </>
      )}
    </div>
  );
}

export default Quote;