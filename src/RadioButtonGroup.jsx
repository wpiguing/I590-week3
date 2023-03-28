import "./styles.css";
import { useState } from "react";
import RadioButton from "./RadioButton";

export default function RadioButtonGroup(props) {
  const { name, values, labelPosition = "right", showLabel } = props;

  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  return (
    <div className="radio-group">
      {values.map((item, i) => (
        <RadioButton
          key={i}
          name={name}
          value={item.value}
          label={item.label}
          disabled={item.disabled}
          onChange={handleOptionChange}
          checked={selectedOption === item.value}
          labelPosition={labelPosition}
          showLabel={showLabel}
        />
      ))}
    </div>
  );
}
