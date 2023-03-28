import "./styles.css";
import { useState } from "react";

export default function RadioButton(props) {
  const {
    id,
    name,
    disabled,
    value,
    label = "Label",
    labelPosition,
    showLabel = true
  } = props;
  const [isDisabled, setDisabled] = useState(disabled);

  return (
    <label
      htmlFor={id}
      className={`radio-container 
      ${labelPosition === "left" ? "left-label " : ""}
      ${!showLabel ? "hide-label" : ""}
      `}
    >
      <span className="radio-label">{label}</span>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        disabled={isDisabled}
      />
      <span className={"radio-checkmark"}></span>
    </label>
  );
}
