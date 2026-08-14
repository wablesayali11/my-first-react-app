import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);

  return (
    <div>
      <h2>💡 Developer Quote</h2>

      <p>"{quote}"</p>

      <p>— {author}</p>
    </div>
  );
}

export default Quote;