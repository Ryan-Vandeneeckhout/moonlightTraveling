import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ScrollupButton = () => {
  const scrollUpButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="scrollButtonContainer">
      <button className="buttonScrollUp" onClick={scrollUpButton}>
        {" "}
        <FontAwesomeIcon icon="fa-angle-up" />
      </button>
    </div>
  );
};
