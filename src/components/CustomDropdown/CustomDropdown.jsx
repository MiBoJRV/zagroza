import React, {useState, useRef, useEffect} from 'react';

export const CustomDropdown = ({hed, customSearchFunction}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (customSearchFunction) {
      const searchResults = await customSearchFunction(query);
      setFilteredOptions(searchResults);
    } else {
      const filteredOptions = [
        'Item 1',
        'Item 2',
        'Item 3',
      ].filter((option) =>
        option.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredOptions(filteredOptions);
    }
  };

  const [filteredOptions, setFilteredOptions] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
  ]);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button
        className={`dropdown-toggle ${isOpen ? 'opened' : ''}`}
        onClick={handleDropdownToggle}>
        {selectedOption || <span>{hed}</span>}
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L0 0H8L4 6Z" fill="#333333"/>
        </svg>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <input
            className="dropdown-search"
            type="text"
            placeholder="Пошук..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <ul className="options-list">
            {filteredOptions.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="option-item"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

