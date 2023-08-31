// Dropdown.js
import React, { useState } from "react";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown nav-pill">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {title}
        <i className={`fas fa-caret-${isOpen ? "up" : "down"}`}></i>
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
