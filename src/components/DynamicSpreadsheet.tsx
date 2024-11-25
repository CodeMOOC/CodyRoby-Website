import React, { useEffect, useState } from 'react';
import { parse } from 'csv-parse/browser/esm';
import { Icon } from '@iconify/react';
import IconSelect from './ui/IconSelect';

export default function DynamicSpreadsheet() {
  type Row = {
    metodo: string;
    toolkit: string;
    // Add other fields from the CSV if necessary
    [key: string]: any; // Optional: for dynamic keys, but avoid unless necessary
  };

  const spreadshettPath = import.meta.env.PUBLIC_SPREADSHEET_URL;

  const [rows, setRows] = useState<Row[]>([]);

  const [filters, setFilters] = useState<{
    metodo: string[];
    toolkit: string[];
  }>({
    metodo: [],
    toolkit: [],
  });

  const [metodi, setMetodi] = useState([
    { name: 'CodyRoby', selected: false },
    { name: 'CodyColor', selected: false },
    { name: 'CodyFeet', selected: false },
  ]);

  const [toolkits, setToolkits] = useState([
    { name: 'Infanzia', selected: false },
    { name: 'Primaria', selected: false },
    { name: 'Secondaria', selected: false },
  ]);

  const handleFilterSelection = ({ filter, value }) => {
    setFilters((prevFilters) => {
      const updatedFilterValues = prevFilters[filter]?.includes(value)
        ? prevFilters[filter].filter((item) => item !== value)
        : [...(prevFilters[filter] || []), value];

      return {
        ...prevFilters,
        [filter]: updatedFilterValues,
      };
    });
    if (filter === 'metodo') {
      setMetodi((prevMetodi) =>
        prevMetodi.map((item) => (item.name === value ? { ...item, selected: !item.selected } : item))
      );
    } else if (filter === 'toolkit') {
      setToolkits((prevTargets) =>
        prevTargets.map((item) => (item.name === value ? { ...item, selected: !item.selected } : item))
      );
    }
  };

  const isMetodiSelected = metodi.some((m) => m.selected);

  const filteredRows = rows.filter((row: Row) => {
    const metodiMatch = filters.metodo.length === 0 || filters.metodo.includes(row.metodo);
    const toolkitMatch = filters.toolkit.length === 0 || filters.toolkit.includes(row.toolkit);
    return metodiMatch && toolkitMatch;
  });

  useEffect(() => {
    async function fetchSpreadsheetData() {
      try {
        const response = await fetch(spreadshettPath);
        const csvData = await response.text();

        parse(csvData, { columns: true, delimiter: ',' }, (err, records) => {
          if (err) {
            console.error('Error parsing CSV:', err);
            return;
          }
          setRows(records);
        });
      } catch (error) {
        console.error('Error fetching spreadsheet data:', error);
      }
    }

    fetchSpreadsheetData();
  }, []);

  return (
    <div className="prose-page">
      <div className="flex justify-start items-center gap-4 ">
        <p className="font-semibold">Filtri:</p>

        <IconSelect
          options={metodi}
          icon="codicon:symbol-method"
          filter="metodo"
          onFilterSelection={handleFilterSelection}
        />
        <IconSelect
          options={toolkits}
          icon="pepicons-pop:label"
          filter="toolkit"
          onFilterSelection={handleFilterSelection}
        />
      </div>
      <div className="flex gap-4 not-prose">
        {/* {isMetodiSelected && <p>Metodi: </p>} */}
        {metodi.map(
          (m) =>
            m.selected && (
              <button
                key={m.name}
                onClick={() => handleFilterSelection({ filter: 'metodo', value: m.name })}
                className="flex items-center border rounded-full border-black px-2 ease-in-out duration-300 hover:bg-red-100"
              >
                <Icon
                  icon="material-symbols:close"
                  className="text-red-500 hover:text-red-600 duration-300 transition-colors"
                />

                {m.name}
              </button>
            )
        )}
        {toolkits.map(
          (t) =>
            t.selected && (
              <button
                key={t.name}
                onClick={() => handleFilterSelection({ filter: 'toolkit', value: t.name })}
                className="flex items-center border rounded-full border-black px-2 ease-in-out duration-300 hover:bg-red-100"
              >
                <Icon
                  icon="material-symbols:close"
                  className="text-red-500 hover:text-red-600 duration-300 transition-colors"
                />

                {t.name}
              </button>
            )
        )}
      </div>
      <hr className="my-6 not-prose" />
      {rows.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(rows[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value: string, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
