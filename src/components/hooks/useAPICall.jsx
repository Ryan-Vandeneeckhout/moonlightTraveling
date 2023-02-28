import axios from "axios";
import { useState } from "react";

export const useAPICall = () => {
  const [error, setError] = useState(null);
  const [dataResponse, setDataResponse] = useState([]);

  const APICall = (urlCode, paramsAPI) => {
    var config = {
      method: "get",
      url: urlCode,
      params: paramsAPI,
      headers: {
        Authorization:
          "Bearer SH6cIaiOu4yFDQ9M6w-8GGkgwaEdtzV1HmQ461hIForr3PDqa-_AwLRfvIkPqrDYKuSvAh9YRLkMSf2BsVEswIWTOGDwrnzM18PA8DEr6elO4j3eBDNqZGixXUbrYXYx",
      },
    };

    axios(config)
      .then(function (response) {
        setDataResponse(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        setError("Something went wrong.");
      });
  };
  return { error, APICall, dataResponse };
};
