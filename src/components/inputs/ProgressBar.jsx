const ProgressBar = (props) => {
  return (
    <div className="progressBarContainer">
      <div className="Bar">
        {Array.from({ length: `${props.green}` }, (_, index) => (
          <div key={index} className="dot green" />
        ))}
        {Array.from({ length: `${props.grey}` }, (_, index) => (
          <div key={index} className="dot grey" />
        ))}
      </div>
    </div>
  );
};
export default ProgressBar;
