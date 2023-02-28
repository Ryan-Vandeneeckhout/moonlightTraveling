import { useState } from "react";
import { auth } from "../firebase/config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../firebase/useAuthContext.js";

export const useSignup = () => {
  //Sign up Page Logic Firebase
  const [error, setError] = useState(false);
  const { dispatch } = useAuthContext();
  const [success, setSuccess] = useState(null);
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
        setSuccess((value) => !value);
        setSuccessText("Login Sucessful");
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setErrorText(err.message);
        setSuccess(false);
      });
  };

  return { error, signup, success, errorText, successText };
};
