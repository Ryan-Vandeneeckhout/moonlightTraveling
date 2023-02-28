import QuotesApi from "./QuotesAPI.jsx";

const Banner = () => {
  //Banner Component that Holds Quote API
  return (
    <section className="siteBanner">
      <h2>Bite-Sized Traveling</h2>
      <h3>The Travel Planner APP</h3>
      <QuotesApi />
    </section>
  );
};

export default Banner;
