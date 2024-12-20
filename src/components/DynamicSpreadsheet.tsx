import React, { useEffect, useState } from 'react';
import { parse } from 'csv-parse/browser/esm';
import { Icon } from '@iconify/react';
import IconSelect from './ui/IconSelect';
import Filter from './ui/Filter.tsx';

export default function DynamicSpreadsheet() {
  type Row = {
    data: string;
    nome: string;
    descrizione: string;
    url_video: string;
    nome_immagine: string;
    metodi: string[];
    targets: string[];
  };

  type TmpRow = {
    data: string;
    nome: string;
    descrizione: string;
    url_video: string;
    nome_immagine: string;
    metodi: string;
    targets: string;
  };

  const spreadshettPath = import.meta.env.PUBLIC_SPREADSHEET_URL;

  const [rows, setRows] = useState<Row[]>([]);

  const [filters, setFilters] = useState<{
    metodo: string[];
    target: string[];
  }>({
    metodo: [],
    target: [],
  });

  const [metodi, setMetodi] = useState([
    { name: 'CodyRoby', selected: false, color: '#6af32a' },
    { name: 'CodyColor', selected: false, color: '#f3d52a' },
    { name: 'CodyFeet', selected: false, color: '#dc2af3' },
  ]);

  const [target, setTarget] = useState([
    { name: 'Infanzia', selected: false, color: '#2a37f3' },
    { name: 'Primaria', selected: false, color: '#2af3d2' },
    { name: 'Secondaria', selected: false, color: '#fd1919' },
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
      setMetodi((prevMetodi) => {
        return prevMetodi.map((item) => (item.name === value ? { ...item, selected: !item.selected } : item));
      });
    } else if (filter === 'target') {
      setTarget((prevTargets) =>
        prevTargets.map((item) => (item.name === value ? { ...item, selected: !item.selected } : item))
      );
    }
  };

  const filteredRows = rows.filter((row: Row) => {
    const metodiMatch = filters.metodo.length === 0 || filters.metodo.every((metodo) => row.metodi.includes(metodo));
    const targetMatch = filters.target.length === 0 || filters.target.every((target) => row.targets.includes(target));
    return metodiMatch && targetMatch;
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

          // Sort records by date
          const sortedRecords = records.sort((a: Row, b: Row) => {
            // Convert to "year-month-day"
            const dateA = new Date(a.data.split('/').reverse().join('-'));
            const dateB = new Date(b.data.split('/').reverse().join('-'));
            // Descending order
            return dateB.getTime() - dateA.getTime();
          });

          const splittedRecords = sortedRecords.map((tmp: TmpRow) => ({
            ...tmp,
            metodi: tmp.metodi.split(',').map((metodo) => metodo.trim()),
            targets: tmp.targets.split(',').map((target) => target.trim()),
          }));

          setRows(splittedRecords);
        });
      } catch (error) {
        console.error('Error fetching spreadsheet data:', error);
      }
    }

    fetchSpreadsheetData();
  }, []);

  // getColor set for each filter
  const getColor = (category: 'metodo' | 'target', name: string) => {
    const list = category === 'metodo' ? metodi : target;
    const item = list.find((item) => item.name === name);
    return item ? item.color : 'black';
  };

  return (
    <div className="">
      <div className='prose-page'>
        <div className="flex justify-start items-center gap-4">
          <p className="font-semibold">Filtri:</p>

          <IconSelect
            options={metodi}
            icon="codicon:symbol-method"
            filter="metodo"
            onFilterSelection={handleFilterSelection}
          />
          <IconSelect
            options={target}
            icon="pepicons-pop:label"
            filter="target"
            onFilterSelection={handleFilterSelection}
          />
        </div>
        <div className="flex gap-4 not-prose">
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
          {target.map(
            (t) =>
              t.selected && (
                <button
                  key={t.name}
                  onClick={() => handleFilterSelection({ filter: 'target', value: t.name })}
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
      </div>
      <hr className="my-6 " />
      {rows.length > 0 ? (
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch gap-4">
          {filteredRows.map((row, index) => (
            <a
              className="flex flex-col items-center border px-6 py-4 rounded-xl hover:bg-[#f3f0f0c2] max-w-[300px]"
              href={row.url_video}
              key={index}
              target="_blank"
            >
              <img src={`/risorse/post-e-webinar/${row.nome_immagine}`} alt="" className="max-w-[200px]" />

              <div className="not-prose">
                <h3 className="text-2xl">{row.nome}</h3>
                {row.descrizione && <p className="text-base text-slate-700 mt-2">{row.descrizione}</p>}
                <div className="flex flex-wrap gap-2 mt-2">
                  {row.metodi &&
                    row.metodi.length > 0 &&
                    row.metodi.map((metodo) => (
                      <Filter key={`${row.nome}-${metodo}`} name={metodo} color={getColor('metodo', metodo)} />
                    ))}
                  {row.targets &&
                    row.targets.length > 0 &&
                    row.targets.map((target) => (
                      <Filter key={`${row.nome}-${target}`} name={target} color={getColor('target', target)} />
                    ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
