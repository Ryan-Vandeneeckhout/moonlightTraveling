import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DevMenu from "./DevMenu.jsx";
import { NavigationButtonMap } from "./NavgationButtonMap.jsx";

const Navigation = (props) => {
  const [isShown, setIsShown] = useState(false);

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <nav className="navBarUppersite">
      <DevMenu
        devMenuFunction={props.devMenuFunction}
        devMenuVisible={props.devMenuVisible}
      />
      <ul>
        {NavigationButtonMap.map((item, index) => {
          return (
            <li key={index} onMouseEnter={() => setIsShown(isShown)}>
              <Link
                className={
                  splitLocation[1] === `${item.href}` ? " active" : " notActive"
                }
                aria-label="Go to home page"
                to={item.href}
              >
                <span>{item.NavText}</span>
              </Link>
            </li>
          );
        })}
        {props.user ? (
          <li>
            <Link
              className={
                splitLocation[1] === "userprofile" ? " active" : " notActive"
              }
              aria-label="User Profile"
              to="/userprofile"
            >
              User 001
            </Link>
          </li>
        ) : (
          <li>
            <Link
              className={
                splitLocation[1] === "signin" ? " active" : " notActive"
              }
              aria-label="Go to to sign in page"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
