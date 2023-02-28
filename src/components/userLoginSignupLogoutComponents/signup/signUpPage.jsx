import { useState } from "react";
import { useSignup } from "../../firebase/useSignup";
import EmailAndPasswordComponent from "../../inputs/EmailAndPasswordComponent";
import NextInput from "../../inputs/NextInput";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, success, errorText, successText } = useSignup();

  const HandleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };
  return (
    <>
      {success ? <h2>{successText}</h2> : null}
      {error ? <h2>{errorText}</h2> : null}
      <form className="" onSubmit={HandleSubmit}>
        <EmailAndPasswordComponent
          password={password}
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
        />

        {props.success ? (
          <NextInput
            ButtonText={"Continue"}
            ButtonClass={``}
            Linked={"/interests"}
          />
        ) : (
          <button className="">Submit</button>
        )}
      </form>
    </>
  );
}
