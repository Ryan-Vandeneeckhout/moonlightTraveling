import axios from "axios";
import { useState } from "react";

export const useAPICall = () => {
  const [error, setError] = useState(null);
  const [dataResponse, setDataResponse] = useState([]);

  const APICall = (urlCode, paramsAPI) => {
    axios({
      method: "GET",
      url: urlCode,
      responseType: "json",
      params: paramsAPI,
    })
      .then((jsonResponse) => {
        if (jsonResponse.length !== 0) {
          setDataResponse(jsonResponse.data);
          console.log(jsonResponse.data);
        } else if (jsonResponse.length === 0) {
          setError("No Items Found");
        }
      })
      .catch((err) => {
        //Api error handling.
        if (err.message === "Not Found") {
          setError("Something went wrong.");
        } else {
          setError("Please try again.");
        }
      });
  };
  return { error, APICall, dataResponse };
};
