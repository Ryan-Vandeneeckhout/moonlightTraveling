export default function EmailAndPasswordInput(props) {
  return (
    <div className="labelsEmail">
      <label htmlFor={`${props.valueText}`}>{props.valueText}:</label>
        <input
          required
          aria-label={`${props.valueText} input`}
          type={`${props.valueText}`}
          onChange={(e) => props.setValue(e.target.value)}
          placeholder={props.valueInput}
          value={props.value}
        />
     
    </div>
  );
}
