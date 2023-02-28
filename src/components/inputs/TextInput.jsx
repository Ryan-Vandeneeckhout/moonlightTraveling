const TextInput = (props) => {
  //Used For File Name, Build Name and Creator Name inputs//
  const handleUserInput = (e) => {
    props.setTextInput(`${e.target.value}`);
  };

  const callFunction = (e) => {
    if (e.key === "Enter") {
      props.callFunctionProps();
      e.preventDefault();
    }
  };

  return (
    <>
      <label htmlFor="builder-Name-Input">{props.labelText}</label>
      <input
        aria-label="builder-Name-Input"
        type="text"
        onChange={handleUserInput}
        className="textinput"
        placeholder={props.placeholderInput}
        onKeyDown={callFunction}
      />
    </>
  );
};

export default TextInput;
