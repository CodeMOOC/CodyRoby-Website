import React, { useEffect, useState } from 'react';
import { parse } from 'csv-parse/browser/esm';
import { Icon } from '@iconify/react';
import IconSelect from './ui/IconSelect';

export default function DynamicSpreadsheet() {
  const spreadshettPath = import.meta.env.PUBLIC_SPREADSHEET_URL;

  const [rows, setRows] = useState([]);

  const [filters, setFilters] = useState({
    Metodi: [],
    Toolkit: [],
  });

  const [metodi, setMetodi] = useState([
    { name: 'CodyRoby', selected: false },
    { name: 'CodyColor', selected: false },
    { name: 'CodyFeet', selected: false },
  ]);

  const [targets, setTargets] = useState([
    { name: 'infanzia', selected: false },
    { name: 'primaria', selected: false },
    { name: 'secondaria', selected: false },
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

    if (filter === 'Metodi') {
      setMetodi((prevMetodi) =>
        prevMetodi.map((item) => (item.name === value ? { ...item, selected: !item.selected } : item))
      );
    } else if (filter === 'Toolkit') {
      setTargets((prevTargets) =>
        prevTargets.map((item) => (item.name === value ? { ...item, selected: !item.selected } : item))
      );
    }
  };

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
          filter="Metodi"
          onFilterSelection={handleFilterSelection}
        />
        <IconSelect
          options={targets}
          icon="pepicons-pop:label"
          filter="Toolkit"
          onFilterSelection={handleFilterSelection}
        />
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
            {rows.map((row, index) => (
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
