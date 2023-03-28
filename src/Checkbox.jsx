import "./styles.css";
import { useState } from "react";

export default function Checkbox(props) {
  const {
    id,
    disabled,
    checked = false,
    indeterminate = false,
    label = "Label",
    labelPosition = "right",
    showLabel = true
  } = props;

  const [isChecked, setChecked] = useState(checked);
  const [isDisabled, setDisabled] = useState(disabled);
  const [isIndeterminate, setIndeterminate] = useState(indeterminate);

  function handleCheckboxChange(e) {
    if (e.target.checked) {
      setChecked(true);
      setIndeterminate(false);
    } else {
      setChecked(false);
      setIndeterminate(false);
    }
  }

  return (
    <div
      className={`checkbox-container ${
        labelPosition === "left" ? "label-left" : ""
      }`}
    >
      <label
        htmlFor={id}
        className={`container ${isIndeterminate ? "indeterminate" : ""} 
      `}
      >
        {showLabel ? label : ""}
        <input
          type="checkbox"
          id={id}
          disabled={isDisabled}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"> </span>
      </label>
    </div>
  );
}
