const SideBars = (props) => {
  return (
    <div
      onClick={props.functionOnclick}
      className={`sideBars ${props.direction}`}
    />
  );
};
export default SideBars;
