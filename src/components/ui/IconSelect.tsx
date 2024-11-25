import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function IconSelect({ options, icon, filter, onFilterSelection }) {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (selection) => {
    setSelected(selection);
    setIsOpen(false);
    onFilterSelection({ filter, value: selection });
  };

  const isAnyOptionSelected = options.some((option) => option.selected);

  return (
    <div className="relative not-prose">
      <button
        className={`${
          isAnyOptionSelected ? 'bg-green-400' : 'bg-slate-400'
        } text-white px-4 py-2 border-slate-400 capitalize flex items-center rounded-lg transition-colors duration-300`}
        onClick={toggleDropdown}
      >
        <Icon icon={icon} className="inline-block mr-2" />
        {filter}
        <Icon icon="lsicon:down-filled" />
      </button>

      {isOpen && (
        <ul className="absolute bg-white border rounded mt-2 shadow w-full max-w-[200px]">
          {options.map((option) =>
            option.selected ? (
              <li
                key={option.name}
                className="flex gap-1 items-center px-2 py-2 capitalize cursor-pointer hover:bg-slate-200"
                onClick={() => handleSelect(option.name)}
              >
                <Icon icon="material-symbols:check" /> {option.name}
              </li>
            ) : (
              <li
                key={option.name}
                className="px-4 py-2 capitalize cursor-pointer hover:bg-slate-200"
                onClick={() => handleSelect(option.name)}
              >
                {option.name}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
