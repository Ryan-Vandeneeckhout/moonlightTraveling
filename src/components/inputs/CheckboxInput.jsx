import { useRef } from "react";

export const CheckboxInput = (props) => {
  const checkBoxRef = useRef(null);

  const checkboxFunction = (event) => {
    if (checkBoxRef.current.checked) {
      props.setCheckboxState([
        ...props.checkboxItemRef.current,
        event.target.value,
      ]);
    } else {
      props.setCheckboxState(
        props.checkboxItemRef.current.filter(
          (item) => item !== event.target.value
        )
      );
    }
    props.callFunctionProps();
    console.log(props.checkboxItemRef.current);
  };
  return (
    <>
      <input
        ref={checkBoxRef}
        type="checkbox"
        name={props.buttonText}
        value={props.buttonValueText}
        onChange={checkboxFunction}
      />
      <label htmlFor={props.buttonText}>{props.buttonText}</label>
    </>
  );
};
