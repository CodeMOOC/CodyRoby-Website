import React, { useEffect, useState } from 'react';
import { parse } from 'csv-parse/browser/esm';
import { Icon } from '@iconify/react';
import IconSelect from './ui/IconSelect';

export default function DynamicSpreadsheet() {
  const [rows, setRows] = useState([]);

  const targets = ['infanzia', 'primaria', 'secondaria'];
  const metodi = ['CodyRoby', 'CodyColor', 'CodyFeet'];

  useEffect(() => {
    async function fetchSpreadsheetData() {
      try {
        const response = await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcSleBVCqdjUx2ZI95NrW5jU4LIlSJp-F3YWD-BJ0t9utjvMzkila7eCXJMgUl9PMWQDrrzcK6i19r/pub?output=csv'
        );
        const csvData = await response.text();

        parse(csvData, { columns: true, delimiter: ',' }, (err, records) => {
          if (err) {
            console.error('Error parsing CSV:', err);
            return;
          }
          setRows(records); // Store the fetched and parsed data
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
        <IconSelect options={metodi} icon="codicon:symbol-method" filter="Metodi" />
        <IconSelect options={targets} icon="pepicons-pop:label" filter="Toolkit" />
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
