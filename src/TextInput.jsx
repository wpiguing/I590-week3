import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TextInput(props) {
  const {
    label = "Label",
    type = "text",
    id,
    value,
    isRequired = false,
    isDisabled = false,
    placeholder = "",
    helper
  } = props;

  const [focused, setFocused] = useState(false);
  const [filledIn, setFilledIn] = useState(false);
  const checkFocusAndFill =
    focused & filledIn ||
    (focused && !filledIn) ||
    (!focused && filledIn) ||
    value != null;

  function InputHelper() {
    let helperText = "";
    if (helper === "error") {
      helperText = "Error Message";
    } else if (isRequired) {
      helperText = "Required";
    } else if (helper !== "" && helper !== "error") {
      helperText = helper;
    }
    return helperText;
  }

  return (
    <div className={`text-input ${helper === "error" ? "text-error" : ""}`}>
      <label htmlFor={id}>
        <input
          id={id}
          type={type}
          required={isRequired}
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={(e) =>
            e.target.value !== "" ? setFilledIn(true) : setFilledIn(false)
          }
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <motion.span
          className="text-label"
          initial={{ y: 3 }}
          animate={{
            y: checkFocusAndFill ? 3 : 16,
            x: checkFocusAndFill ? 12 : 16,
            scale: checkFocusAndFill ? 0.8 : 1
          }}
        >
          {label}
        </motion.span>
      </label>
      <div
        className={`input-helper ${helper === "error" ? "helper-error" : ""}`}
      >
        <small>{InputHelper()}</small>
      </div>
    </div>
  );
}
