import axios from "axios";
import React, { useEffect, useState } from "react";
const QuotesApi = () => {
  const [quotes, setQuotes] = useState({});
  const [errorAPI, setErrorAPI] = useState("");
  // UseEffect Call Once for a Random Quote in Banner//
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.quotable.io/random",

      params: {
        maxLength: 140,
      },
    })
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((err) => {
        if (err.response) {
          setErrorAPI("The Greatest Among Us Have Also Failed, Exigoan");
        }
      });
  }, []);

  const { content, author } = quotes;

  const renderQuote = () => {
    // API Return Success //
    if (quotes.length > 0) {
      return (
        <>
          <h4 className="titleQuote">
            {content} - {author}
          </h4>
        </>
      );
    } else {
      //Return Error on API Failed//
      return <p>{errorAPI}</p>;
    }
  };
  return <>{renderQuote()}</>;
};

export default QuotesApi;
