import "./styles.css";
import TextInput from "./TextInput";
import Switch from "./Switch";
import Checkbox from "./Checkbox";
import RadioButtonGroup from "./RadioButtonGroup";
import SegmentedButtonGroup from "./SegmentedButtonGroup";

export default function App() {
  return (
    <div className="App">
      <h1>Interactive Component Library</h1>
      <hr />
      <div className="section">
        <h2>Text fields</h2>
        <TextInput type={"text"} label={"Text"} />
        <TextInput type={"email"} label={"Email"} isRequired={true} />
        <TextInput type={"password"} label={"Password"} />
        <TextInput
          label={"Disabled"}
          isDisabled={true}
          helper="Some Helper Text"
        />
        <TextInput
          type={"text"}
          value={"Some pre existing value"}
          helper="Some Helper Text"
        />
        <TextInput type={"text"} value={"Wrong Input"} helper="error" />
      </div>
      <div className="section">
        <h2>Switch</h2>
        <Switch />
        <Switch showLabel={true} label={"Right Label"} />
        <Switch showLabel={true} label={"Left Label"} labelPosition={"left"} />
        <Switch
          showLabel={true}
          rightLabel={true}
          label={"Disabled"}
          disabled={true}
        />
      </div>
      <div className="section">
        <h2>Checkboxes</h2>
        <Checkbox label={"Unchecked"} />
        <Checkbox label={"Checked"} checked={true} />
        <Checkbox label={"Disabled"} disabled={true} />
        <Checkbox label={"Indeterminate"} indeterminate={true} />
        <Checkbox label={"Left Label"} labelPosition={"left"} />
        <Checkbox label={"No Label"} showLabel={false} />
      </div>
      <div className="section">
        <h2>Radio Buttons</h2>
        <h3>Label Right</h3>
        <RadioButtonGroup
          name="RadioButtonGroup"
          values={[
            { value: "value1", label: "Radio Button 1" },
            { value: "value2", label: "Radio Button 2" },
            { value: "value3", label: "Radio Button 3", disabled: true }
          ]}
        />
        <h3>Label Left</h3>
        <RadioButtonGroup
          name="RadioButtonGroup2"
          labelPosition="left"
          values={[
            { value: "value1", label: "Radio Button 1" },
            { value: "value2", label: "Radio Button 2" },
            { value: "value3", label: "Radio Button 3", disabled: true }
          ]}
        />
        <h3>No Label</h3>
        <RadioButtonGroup
          name="RadioButtonGroup3"
          showLabel={false}
          values={[
            { value: "value1", label: "Radio Button 1" },
            { value: "value2", label: "Radio Button 2" },
            { value: "value3", label: "Radio Button 3", disabled: true }
          ]}
        />
      </div>
      <div className="section">
        <h2>Segmented Buttons</h2>
        <div className="container-sm">
          <SegmentedButtonGroup
            tabs={[
              { value: "value1", label: "Tab 1" },
              { value: "value2", label: "Tab 2" },
              { value: "value3", label: "Tab 3" }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
