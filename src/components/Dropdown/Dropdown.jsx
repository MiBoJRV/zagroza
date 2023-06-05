import React, { useState } from 'react';
import {DropdownContent} from "../DropdownContent/DropdownContent";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Оберіть ваше місто</button>
      {isOpen && <DropdownContent />}
    </div>
  );
};

