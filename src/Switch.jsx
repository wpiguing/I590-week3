import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Switch(props) {
  const {
    id,
    label = "",
    disabled = false,
    showLabel = false,
    labelPosition = "right"
  } = props;

  const [isDisabled, setDisabled] = useState(disabled);
  const [isOn, setIsOn] = useState(false);

  function HandleToggle(e) {
    setIsOn(!isOn);
  }

  return (
    <div
      className={`switch-button 
      ${isOn ? "on" : "off"}
      ${isDisabled ? "disabled" : ""} 
      ${labelPosition === "left" && showLabel ? "left-label" : ""}
      `}
      id={id}
      onClick={!isDisabled ? HandleToggle : null}
    >
      {labelPosition === "left" && showLabel ? (
        <span className="left-label-text">{label}</span>
      ) : null}
      <span className="onStatus">On</span>
      <span className="offStatus">Off</span>
      {labelPosition === "right" && showLabel ? (
        <span className="right-label">{label}</span>
      ) : null}
    </div>
  );
}
