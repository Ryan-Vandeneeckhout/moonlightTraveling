import Credits from "./Credits/credits.jsx";

// Footer Wrapper Component - mostly credits may create a contact page
const Footer = (props) => {
  return (
    <footer ref={props.CreditsRef}>
      <Credits />
    </footer>
  );
};
export default Footer;
