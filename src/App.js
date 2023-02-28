import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./sass/style.scss";
import Navigation from "./components/navigation/Navigation";
import LandingPage from "./components/mainComponentWrappers/landingPage/LandingPage";
import ContentPage from "./components/mainComponentWrappers/contentPage/ContentPage";
import UserContentPage from "./components/mainComponentWrappers/userContentPage/UserContentPage";
import SideMenu from "./components/sideMenus/sideMenu/SideMenu";
import DevMenuOverlay from "./components/overlays/devMenuOverlay";
import { LandingPageSignUpLogin } from "./components/userLoginSignupLogoutComponents/LandingPageSignUpLogin";
import Login from "./components/userLoginSignupLogoutComponents/login/loginPage";
import Signup from "./components/userLoginSignupLogoutComponents/signup/signUpPage";
import IndividualPage from "./components/mainComponentWrappers/contentPage/IndividualPage";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const ShowSideMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navigation
            devMenuFunction={ShowSideMenu}
            devMenuVisible={showMenu}
          />
        </header>
        <SideMenu showMenu={showMenu} />
        <main>
          <Routes>
            <Route extact path="/" element={<LandingPage />} />
            <Route extact path="/content" element={<ContentPage />} />
            <Route extact path="/usercontent" element={<UserContentPage />} />
            <Route extact path="/signin" element={<LandingPageSignUpLogin />} />
            <Route extact path="/login" element={<Login />} />
            <Route extact path="/signup" element={<Signup />} />
            <Route path="/:itemid" element={<IndividualPage />} />
          </Routes>
          <DevMenuOverlay showMenu={showMenu} ShowSideMenu={ShowSideMenu} />
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
