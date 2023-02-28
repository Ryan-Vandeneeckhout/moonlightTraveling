import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextInput from "../../../inputs/TextInput";
import { RadioButton } from "../../../inputs/RadioButton";
import { CheckboxInput } from "../../../inputs/CheckboxInput";

export const ContentSideBarButton = (props) => {
  const [showList, setShowList] = useState(false);

  const ShowButtonList = () => {
    setShowList((showList) => !showList);
  };

  return (
    <>
      <button onClick={ShowButtonList}>
        {props.asideTextHeader}{" "}
        <span className="headerButton">
          {showList ? (
            <FontAwesomeIcon icon="fa-angle-down" />
          ) : (
            <FontAwesomeIcon icon="fa-angle-up" />
          )}
        </span>
      </button>
      <div
        className={`contentButtonList${
          showList ? " displayFlex" : " displayNone"
        }`}
      >
        {props.arraylist.map((item, index) => {
          return (
            <div key={index} className="subMenuButtons">
              {props.ButtonType ? (
                <>
                  <CheckboxInput
                    setTextInput={props.setAPISearchTerm}
                    callFunctionProps={props.renderData}
                    buttonText={item.buttonText}
                    buttonValueText={item.buttonValueText}
                    setCheckboxState={props.setAPISearchTerm}
                    checkboxItemRef={props.APISearchTermRef}
                  />
                </>
              ) : (
                <RadioButton
                  buttonText={item.buttonText}
                  groupradioName={props.asideTextHeader}
                  setAPIPriceIndex={props.setAPIPriceIndex}
                  setAPIOpenClose={props.setAPIOpenClose}
                  setAPIRating={props.setAPIRating}
                  buttonValue={props.buttonValue}
                  buttonValueText={item.buttonValueText}
                  renderData={props.renderData}
                  setAPISearchTerm={props.setAPISearchTerm}
                />
              )}
            </div>
          );
        })}

        {props.allowUserInput ? (
          <TextInput
            setTextInput={props.setAPISearchTerm}
            callFunctionProps={props.renderData}
            textInput={props.setAPISearchTerm}
            placeholderInput="Search Here..."
          />
        ) : null}
      </div>
    </>
  );
};
