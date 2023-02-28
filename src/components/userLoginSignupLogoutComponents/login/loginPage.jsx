import { useState } from "react";
import { useLogin } from "../../firebase/useLogin";
import EmailAndPasswordComponent from "../../inputs/EmailAndPasswordComponent";
import NextInput from "../../inputs/NextInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, success, errorText } = useLogin();

  const HandleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      {/*Login Page JSX*/}
      <NextInput
        ButtonText={"Back"}
        ButtonClass={`nextButton`}
        Linked={"/"}
        ButtonClassContainer={`backButtonContainer`}
      />
      <h2>Login to Haven</h2>
      {success ? <h3>{success}</h3> : <h3>{errorText}</h3>}
      <form className="" onSubmit={HandleSubmit}>
        <EmailAndPasswordComponent
          password={password}
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        {success ? (
          <NextInput ButtonText={"Continue"} ButtonClass={``} Linked={"/"} />
        ) : (
          <button className="">Log In</button>
        )}
      </form>
    </>
  );
}
