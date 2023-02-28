import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualPage = () => {
  const [individualProducts, setIndividualProduct] = useState(null);
  const [targetImage] = useState(false);

  const itemid = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    var config = {
      method: "get",
      url: `https://web-production-5976.up.railway.app/https://api.yelp.com/v3/businesses/${itemid.itemid}`,
      headers: {
        Authorization:
          "Bearer SH6cIaiOu4yFDQ9M6w-8GGkgwaEdtzV1HmQ461hIForr3PDqa-_AwLRfvIkPqrDYKuSvAh9YRLkMSf2BsVEswIWTOGDwrnzM18PA8DEr6elO4j3eBDNqZGixXUbrYXYx",
      },
    };

    axios(config)
      .then(function (response) {
        setIndividualProduct(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [itemid.itemid]);

  const renderImageMain = () => {
    if (targetImage === false) {
      return (
        <img
          src={individualProducts.photos[0]}
          alt={`${individualProducts.name}`}
        />
      );
    } else {
    }
  };

  const renderName = () => {
    if (individualProducts === (undefined || null)) {
      <p>Loading</p>;
    } else {
      return (
        <div className="content">
          <div className="photobox">
            <div className="photoboxMain">{renderImageMain()}</div>

            {individualProducts.photos.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  alt={`${individualProducts.name}`}
                />
              );
            })}
          </div>
          <div className="contentDescription">
            <h2>{individualProducts.name}</h2>
            <div className="addressBox">
              <p>{individualProducts.location.address1}</p>
              <p>{individualProducts.location.city}</p>
            </div>

            {individualProducts.hours.map(({ open }) => {
              return (
                <div className="hoursContainer">
                  {open.map((item, index) => {
                    return (
                      <div key={index} className="hoursItem">
                        <h3>{item.day}</h3>
                        <p>{item.start}</p>
                        <p>{item.end}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <section className="contentPageIDSection">
      <div className="wrapper">{renderName()}</div>
    </section>
  );
};
export default IndividualPage;
