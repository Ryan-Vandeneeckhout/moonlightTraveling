import { useState } from "react";
import SideMenuMainMenu from "./SideMenuMainMenu";
import ThemeMenuChanger from "../themeMenu/themeMenu";

const SideMenu = (props) => {
  const [mainMenushow, setMainMenu] = useState(true);
  const [themeMenuState, setThemeMenu] = useState(false);
  const [musicMenuState, setMusicMenu] = useState(false);

  return (
    <aside
      className={`sideMenu${props.showMenu ? " smoothClosed" : " smoothShown"}`}
    >
      <div
        className={`mainMenu${mainMenushow ? " displayFlex" : " displayNone"}`}
      >
        <SideMenuMainMenu
          setMainMenu={setMainMenu}
          setThemeMenu={setThemeMenu}
          setMusicMenu={setMusicMenu}
          musicMenuState={musicMenuState}
        />
      </div>

      <button
        className={`${mainMenushow ? " displayNone" : " displayFlex"}`}
        onClick={() => {
          setMainMenu(true);
          setThemeMenu(false);
          setMusicMenu(false);
        }}
      >
        Main Menu
      </button>
      {themeMenuState && (
        <ThemeMenuChanger
          ResetTheme={props.ResetTheme}
          themeMenuState={themeMenuState}
        />
      )}
    </aside>
  );
};
export default SideMenu;
