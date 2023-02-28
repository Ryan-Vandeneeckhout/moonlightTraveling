import useState from "react-usestateref";
import TextInput from "../../inputs/TextInput";
import Banner from "../../wrappers/banner";
import { useAPICall } from "../../hooks/useAPICall";
import ContentItem from "./ContentItem";
import { defaultSearch } from "./DefaultSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContentSideBar } from "./ContentSideBarComponents/ContentSideBar";
import { ContentNavBar } from "./contentNavBarComponents/ContentNavBar";
import { ScrollupButton } from "../../inputs/ScrollupButton";

const ContentPage = () => {
  const [APIbusinessesLocation, setAPIbusinessesLocation] = useState(
    "London, United Kingdom"
  );
  const [, setAPIPrice, APIPriceRef] = useState(1, 2, 3, 4);
  const [, setAPISearchTerm, APISearchTermRef] = useState("Food");
  const [, setAPIOpenClose, APIOpenCloseRef] = useState(null);
  const [, setAPIRating, APIRatingRef] = useState(null);
  const { APICall, dataResponse } = useAPICall();

  const renderData = () => {
    let urlCode = `https://web-production-5976.up.railway.app/https://api.yelp.com/v3/businesses/search`;

    let paramsAPI = {
      location: APIbusinessesLocation,
      limit: 50,
      price: APIPriceRef.current,
      open_now: APIOpenCloseRef.current,
      term: APISearchTermRef.current,
    };

    console.log(APISearchTermRef.current);

    APICall(urlCode, paramsAPI);
    urlLocationSet(APIbusinessesLocation);
  };

  const fetchCity = (e) => {
    let urlCode = `https://web-production-5976.up.railway.app/https://api.yelp.com/v3/businesses/search`;

    let paramsAPI = {
      location: e.target.getAttribute("data-value"),
      limit: 50,
    };

    setAPIbusinessesLocation(e.target.getAttribute("data-value"));

    APICall(urlCode, paramsAPI);
    urlLocationSet(APIbusinessesLocation);
  };

  const urlLocationSet = (APIbusinessesLocation) => {
    const url = new URL(window.location.href);
    url.searchParams.set("location", APIbusinessesLocation);
    window.history.replaceState(null, null, url);
  };

  const renderContentAPI = () => {
    if (
      dataResponse.businesses === [] ||
      dataResponse.businesses === undefined
    ) {
      return (
        <>
          {defaultSearch.businesses.map((item, index) => {
            return (
              <ContentItem
                index={index}
                itemid={item.id}
                itemname={item.name}
                itemLocationAddress1={item.location.address1}
                itemImage_url={item.image_url}
                itemLocationCity={item.location.city}
                itemLocationCountry={item.location.country}
                itemRating={item.rating}
                itemIs_Closed={item.is_closed}
                price={item.price}
              />
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {dataResponse.businesses.map((item, index) => {
            return (
              <ContentItem
                index={index}
                itemid={item.id}
                itemname={item.name}
                itemLocationAddress1={item.location.address1}
                itemImage_url={item.image_url}
                itemLocationCity={item.location.city}
                itemLocationCountry={item.location.country}
                itemRating={item.rating}
                itemIs_Closed={item.is_closed}
                review_count={item.review_count}
                price={item.price}
              />
            );
          })}
        </>
      );
    }
  };

  const renderResultsLength = () => {
    if (
      dataResponse.businesses === [] ||
      dataResponse.businesses === undefined
    ) {
      return (
        <p className="resultsReturned">
          {defaultSearch.businesses.length} Results
        </p>
      );
    } else {
      return (
        <p className="resultsReturned">
          {dataResponse.businesses.length} Results
        </p>
      );
    }
  };

  const renderScrollbar = () => {
    if (
      dataResponse.businesses === [] ||
      dataResponse.businesses === undefined
    );
    else if (dataResponse.businesses.length > 10) {
      return <ScrollupButton />;
    }
  };
  return (
    <section className="contentPageSection">
      <div className="wrapper">
        <Banner />
        <div className="content">
          <div className="navbarContentPage">
            <div className="searchBar">
              <TextInput
                placeholderInput="Search by City, State, Country"
                textInput={APIbusinessesLocation}
                setTextInput={setAPIbusinessesLocation}
                callFunctionProps={renderData}
              />
              <button onClick={renderData}>
                <FontAwesomeIcon icon="fa-search" />
              </button>
            </div>
            <ContentNavBar fetchCity={fetchCity} />
          </div>
          <div className="contentMainWrapper">
            <ContentSideBar
              APIPrice={setAPIPrice}
              setAPIOpenClose={setAPIOpenClose}
              setAPIRating={setAPIRating}
              dataResponse={dataResponse.businesses}
              renderData={renderData}
              setAPISearchTerm={setAPISearchTerm}
              APIRatingRef={APIRatingRef.current}
              APIbusinessesLocation={APIbusinessesLocation}
              APISearchTermRef={APISearchTermRef}
            />

            <div className="contentReturned">
              {renderResultsLength()}
              <div className="contentList">{renderContentAPI()}</div>
              {renderScrollbar()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContentPage;
