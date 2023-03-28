import "./styles.css";
import { useState } from "react";
import SegmentedButton from "./SegmentedButton";

export default function SegmentedButtonGroup(props) {
  const { tabs } = props;

  const [activeTab, setActiveTab] = useState(0);

  function handleTabChange(i) {
    setActiveTab(i);
  }

  return (
    <div className="segmented-group">
      {tabs.map((item, i) => (
        <SegmentedButton
          key={i}
          id={item.value}
          label={item.label}
          active={activeTab === i}
          onClick={() => handleTabChange(i)}
        />
      ))}
    </div>
  );
}
