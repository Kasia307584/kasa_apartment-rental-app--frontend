import { useState } from "react";

export default function Dropdown(props) {
  const { className, name, text } = props;

  const [isOpen, setIsOpen] = useState(false);

  function openDropdown() {
    setIsOpen(true);
  }
  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <article className={`dropmenu ${className}`}>
      <button className="dropbtn">
        {name}
        <i
          className="fas fa-chevron-down"
          onClick={openDropdown}
          style={{ display: isOpen ? "none" : "block" }}
        ></i>
        <i
          className="fas fa-chevron-up"
          onClick={closeDropdown}
          style={{ display: isOpen ? "block" : "none" }}
        ></i>
      </button>
      <ul className="text" style={{ display: isOpen ? "block" : "none" }}>
        {text}
      </ul>
    </article>
  );
}
