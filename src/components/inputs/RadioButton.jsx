export const RadioButton = (props) => {
  const RadioChange = (event) => {
    if (props.buttonValue === 1) {
      props.setAPIPriceIndex(event.target.value);
      props.renderData();
    }

    if (props.buttonValue === 2) {
      props.setAPIOpenClose(event.target.value);
      props.renderData();
    }

    if (props.buttonValue === 3) {
      props.setAPIRating(event.target.value);
      props.renderData();
    }

    if (props.buttonValue === 6) {
      props.setAPISearchTerm(event.target.value);
      props.renderData();
    }
  };

  return (
    <>
      <input
        type="radio"
        onChange={RadioChange}
        name={props.groupradioName}
        value={props.buttonValueText}
      />
      <label htmlFor={props.buttonText}>{props.buttonText}</label>
    </>
  );
};
