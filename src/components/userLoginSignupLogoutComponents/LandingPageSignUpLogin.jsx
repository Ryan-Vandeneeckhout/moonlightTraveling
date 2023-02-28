import InputLinked from "../inputs/InputLinked";

export const LandingPageSignUpLogin = () => {
  return (
    <section className="landingPageSignUpLogin">
      <div className="wrapper">
        <div className="content">
          <div className="contentContainer">
            <h2>Welcome</h2>
            <InputLinked
              ButtonText={"Sign Up"}
              ButtonClass={"logInButton"}
              ButtonClassContainer={"signInLandingPageButton"}
              Linked={"/signup"}
              Show={"hidden"}
            />
            <InputLinked
              ButtonText={"Log In"}
              Linked={"/login"}
              ButtonClass={"logInButton"}
              ButtonClassContainer={"logInLandingPageButton"}
              Show={"hidden"}
            />
          </div>
          <div className="contentContainerB">
            <h1>Bite Size Traveling</h1>
            <h2>The Travel APP - Designed with You in Mind</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
