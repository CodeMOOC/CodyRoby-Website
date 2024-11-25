import React, { useEffect, useState } from 'react';
import { parse } from 'csv-parse/browser/esm';
import { Icon } from '@iconify/react';

export default function IconSelect({ options, icon, filter }) {
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (metodo) => {
    setSelected(metodo);
  };

  return (
    <div className="relative">
      <button
        className="bg-slate-400 text-white px-4 py-2 border-slate-400 capitalize flex items-center rounded-lg"
        onClick={toggleDropdown}
      >
        <Icon icon={icon} className="inline-block mr-2" />
        {filter}
        <Icon icon="lsicon:down-filled" />
      </button>

      {isOpen && (
        <ul className="absolute bg-white border rounded mt-2 shadow w-full max-w-[200px]">
          {options.map((metodo) => (
            <li
              key={metodo}
              className="px-4 py-2 capitalize cursor-pointer hover:bg-slate-200"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {metodo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
