import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const NextInput = (props) => {
  const [ButtonItemsView, ButtonItemsInView] = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ButtonItemsView}
      className={`buttonContainer ${
        ButtonItemsInView ? props.ButtonClassContainer : "smoothClosed"
      }`}
    >
      <Link to={`${props.Linked}`}>
        <button className={props.ButtonClass}>{props.ButtonText}</button>
      </Link>
    </div>
  );
};

export default NextInput;
