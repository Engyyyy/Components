import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const [select, setSelect] = useState(null);

  const handleSelect = (selection) => {
    setSelect(selection);
  };

  return <Dropdown value={select} onChange={handleSelect} options={options} />;
}

export default App;
