import "./styles.css";
import { useState } from "react";

export default function SegmentedButton(props) {
  const { id, disabled = false, active, label = "Label", onClick } = props;
  const [isDisabled, setDisabled] = useState(disabled);
  const activeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18px"
      height="18px"
    >
      <path d="M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z" />
    </svg>
  );

  return (
    <button
      id={id}
      disabled={isDisabled}
      className={`segmented-button ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {active ? <span className="button-icon">{activeIcon}</span> : ""}
      <span className="button-label">{label}</span>
    </button>
  );
}
