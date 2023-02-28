import { Link } from "react-router-dom";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const ContentItem = (props) => {
  const [contentItemView, contentItemInView] = useInView({});
  const [showList, setShowList] = useState(false);

  const ShowButtonList = () => {
    setShowList((showList) => !showList);
  };

  if (
    props.itemImage_url === null ||
    props.itemImage_url === undefined ||
    props.itemImage_url === ""
  );
  else {
    return (
      <Link
        onMouseEnter={ShowButtonList}
        onMouseLeave={ShowButtonList}
        ref={contentItemView}
        key={props.index}
        to={`/${props.itemid}`}
      >
        <div
          className={`contentItem${
            contentItemInView
              ? " animationActiveProject"
              : " notActiveAnimation"
          }`}
        >
          <div className="imageContainer">
            <img src={props.itemImage_url} alt={`${props.itemname}`} />
            {showList ? (
              <div className="bottomBar">
                {props.price ? (
                  <p>Yelp Price Rating: {props.price} </p>
                ) : (
                  <p>No Yelp Price Rating</p>
                )}

                {props.itemIs_Closed ? <p>Closed Now</p> : <p>Open Now</p>}
              </div>
            ) : null}
          </div>

          <h3>{props.itemname}</h3>
          <p>
            {props.itemLocationAddress1 ? (
              <span>{props.itemLocationAddress1},</span>
            ) : null}{" "}
            {props.itemLocationCity}, {props.itemLocationCountry}
          </p>
          <p>Rating: {props.itemRating}</p>
        </div>
      </Link>
    );
  }
};
export default ContentItem;
