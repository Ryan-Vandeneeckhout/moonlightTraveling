import { ContentNavBarButton } from "./ContentNavBarButton";
import { ContentNavButtonMap } from "./ContentNavButtonMap";

export const ContentNavBar = (props) => {
  const renderCities = () => {
    return (
      <>
        {ContentNavButtonMap.map(({ arraylist, Continent }) => {
          return (
            <ContentNavBarButton
              fetchCity={props.fetchCity}
              arraylist={arraylist}
              Continent={Continent}
            />
          );
        })}
      </>
    );
  };

  return <>{renderCities()}</>;
};
