import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showQuote, setShowQuote] = useState(true);

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
      setQuote(data);
    } catch (err) {
      setError("Could not load quote. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <h2>Daily Quote</h2>

      {loading && <p>⏳ Fetching a new quote...</p>}

      {!loading && error && (
        <div>
          <p>{error}</p>
          <button onClick={fetchQuote}>Try Again</button>
        </div>
      )}

      {!loading && !error && quote && (
        <>
          {showQuote && (
            <div>
              <p>"{quote.quote}"</p>
              <p>— {quote.author}</p>
            </div>
          )}

          <button
            onClick={() => setShowQuote(!showQuote)}
          >
            {showQuote ? "Hide Quote" : "Show Quote"}
          </button>

          <button onClick={fetchQuote} disabled={loading}>
            {loading ? "Loading..." : "Refresh Quote"}
          </button>
        </>
      )}
    </div>
  );
}

export default Quote;