import { useState } from "react";

export const ContentNavBarButton = (props) => {
  const [hoverOpen, setHoverOpen] = useState(false);
  const [alphabetizeArraylist, setAlphabetizeArraylist] = useState(null);

  const setHoverState = () => {
    setHoverOpen((hoverOpen) => !hoverOpen);
    alphabetize();
  };

  const alphabetize = () => {
    const orderedPrice = props.arraylist.sort((a, b) => {
      let pa = a.town,
        pb = b.town;

      if (pa < pb) {
        return -1;
      }
      if (pa > pb) {
        return 1;
      }
      return 0;
    });
    //set product is updated to alphabetical order false for decscending true for ascending//
    setAlphabetizeArraylist([...orderedPrice]);
  };

  const renderButtons = () => {
    if (alphabetizeArraylist === null);
    else {
      return (
        <>
          {alphabetizeArraylist.map((item, index) => {
            return (
              <li data-value={item.town} key={index} onClick={props.fetchCity}>
                {item.town}
              </li>
            );
          })}
        </>
      );
    }
  };

  return (
    <>
      <button
        className="buttonContinent"
        onMouseEnter={setHoverState}
        onMouseLeave={setHoverState}
      >
        {props.Continent}
      </button>
      <ul
        className={`cityButtonList${
          hoverOpen ? " displayFlex" : " displayNone"
        }`}
        onMouseEnter={setHoverState}
        onMouseLeave={setHoverState}
      >
        {" "}
        {renderButtons()}
      </ul>
    </>
  );
};
