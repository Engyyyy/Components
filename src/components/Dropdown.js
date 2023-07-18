import { useEffect, useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef();
  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleDocClick = (event) => {
      if (!dropdownEl.current) return;
      if (!dropdownEl.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("click", handleDocClick, true);
    return () => {
      document.removeEventListener("click", handleDocClick);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleSelect(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={dropdownEl} className="w-48 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
