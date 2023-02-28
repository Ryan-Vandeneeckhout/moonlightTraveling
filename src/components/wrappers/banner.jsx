import { SiteName } from "../overlays/siteName.jsx";
import QuotesApi from "./QuotesAPI.jsx";

const Banner = () => {
  //Banner Component that Holds Quote API
  return (
    <section className="siteBanner">
      <h2>{SiteName}</h2>
      <h3>The Travel Planner APP</h3>
      <QuotesApi />
    </section>
  );
};

export default Banner;
