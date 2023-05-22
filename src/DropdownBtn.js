import { useState } from "react";

export default function Dropdown(props) {
  const { className, name, text } = props;

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenDropdownClick() {
    setIsOpen(true);
  }
  function handleCloseDropdownClick() {
    setIsOpen(false);
  }

  return (
    <article className={`dropmenu ${className}`}>
      <button className="dropbtn">
        {name}
        <i
          className="fas fa-chevron-down"
          onClick={handleOpenDropdownClick}
          style={{ display: isOpen ? "none" : "block" }}
        ></i>
        <i
          className="fas fa-chevron-up"
          onClick={handleCloseDropdownClick}
          style={{ display: isOpen ? "block" : "none" }}
        ></i>
      </button>
      <ul className="text" style={{ display: isOpen ? "block" : "none" }}>
        {text}
      </ul>
    </article>
  );
}
