import "./App.css";
import { useState } from "react";

export function ReplaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [disabled, setDisabled] = useState(false);

  const [color, setColor] = useState("MediumVioletRed");
  const newBtnColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div className="App">
      <button
        disabled={disabled}
        onClick={() => setColor(newBtnColor)}
        style={{ backgroundColor: disabled ? "gray" : color, color: "white" }}
      >
        Change to {ReplaceCamelWithSpace(newBtnColor)}
      </button>
      <input
        id="disable-btn"
        type="checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-btn">Disable Button</label>
    </div>
  );
}

export default App;
