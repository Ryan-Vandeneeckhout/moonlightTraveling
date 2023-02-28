import { SideMenuMainMenuButtonMap } from "./SideMenuMainMenuButtonMap.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideMenuMainMenu = (props) => {
  return (
    <div className="mainMenuContainer">
      {SideMenuMainMenuButtonMap.map((item, index) => {
        return (
          <button
            className="mainMenuButton"
            key={index}
            onClick={() => {
              props.setMainMenu(false);
              props.setThemeMenu(item.ThemeSetting === "true");
              props.setMusicMenu(item.MusicSetting === "true");
            }}
          >
            <span>
              <FontAwesomeIcon
                className="menuItem fontAweIconSideMenu"
                icon={[`${item.IconPicturePrefix}`, `${item.IconPicture}`]}
              />
              {item.ButtonText}
            </span>
            <FontAwesomeIcon
              className="iconsBottom"
              icon={[`${item.IconArrowPreFix}`, `${item.IconArrow}`]}
            />
          </button>
        );
      })}
    </div>
  );
};

export default SideMenuMainMenu;
