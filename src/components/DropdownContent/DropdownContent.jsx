import React from 'react';
import {DropdownOption} from "../DropdownOption/DropdownOption";

export const DropdownContent = () => {
  return (
    <div>
      <input type="text" placeholder="Пошук" />
      <ul>
        {/* Список варіантів */}
        <DropdownOption option="item 1"/>
        <DropdownOption option="item 2"/>
        <DropdownOption option="item 3"/>
      </ul>
    </div>
  );
};

