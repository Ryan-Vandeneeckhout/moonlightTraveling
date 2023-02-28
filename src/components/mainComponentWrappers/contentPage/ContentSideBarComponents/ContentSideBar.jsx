import { ContentSideBarButton } from "./ContentSideBarButton";
import { ContentSideBarButtonMap } from "./ContentSideBarButtonMap";

export const ContentSideBar = (props) => {
  const renderSideHeader = () => {
    if (props.dataResponse === [] || props.dataResponse === undefined) {
      return <h3>United Kingdom, London</h3>;
    } else {
      return <h3>{props.APIbusinessesLocation}</h3>;
    }
  };

  return (
    <aside>
      {renderSideHeader()}
      <div className="buttonList">
        {ContentSideBarButtonMap.map(
          ({
            arraylist,
            asideTextHeader,
            ButtonType,
            index,
            allowUserInput,
            buttonValue,
          }) => {
            return (
              <ContentSideBarButton
                key={index}
                arraylist={arraylist}
                asideTextHeader={asideTextHeader}
                ButtonType={ButtonType}
                allowUserInput={allowUserInput}
                setAPIPriceIndex={props.APIPrice}
                buttonValue={buttonValue}
                setAPIOpenClose={props.setAPIOpenClose}
                setAPIRating={props.setAPIRating}
                renderData={props.renderData}
                APIRatingRef={props.APIRatingRef}
                setAPISearchTerm={props.setAPISearchTerm}
                APISearchTermRef={props.APISearchTermRef}
              />
            );
          }
        )}
      </div>
    </aside>
  );
};
