import React, { useState } from 'react';

// Import full metadata object
import yellow from '~/assets/images/codycolor/yellow-150x150.png';
import red from '~/assets/images/codycolor/red-150x150.png';
import grey from '~/assets/images/codycolor/grey-150x150.png';
import start from '~/assets/images/codycolor/start-150x150.png';
import target from '~/assets/images/codycolor/target-150x150.png';

const ButtonSelection = () => {
  const [active, setActive] = useState('grey');

  // Update the active state when a button is clicked
  const changeTextToView = (textToView: string) => {
    console.log('changed to:', textToView);
    setActive(textToView);
  };

  // Define a function to determine button class
  const buttonClass = (color: string) =>
    `border-2 p-2 rounded-xl ${active === color ? 'border-slate-500' : 'border-transparent'}`;

  return (
    <>
      <div className="flex gap-4">
        <button className={buttonClass('grey')} onClick={() => changeTextToView('grey')}>
          <img src={grey.src} alt="grey" width={grey.width} height={grey.height} className="my-0" />
        </button>
        <button className={buttonClass('red')} onClick={() => changeTextToView('red')}>
          <img src={red.src} alt="red" width={red.width} height={red.height} className="my-0" />
        </button>
        <button className={buttonClass('yellow')} onClick={() => changeTextToView('yellow')}>
          <img src={yellow.src} alt="yellow" width={yellow.width} height={yellow.height} className="my-0" />
        </button>
        <button className={buttonClass('start')} onClick={() => changeTextToView('start')}>
          <img src={start.src} alt="start" width={start.width} height={start.height} className="my-0" />
        </button>
        <button className={buttonClass('target')} onClick={() => changeTextToView('target')}>
          <img src={target.src} alt="target" width={target.width} height={target.height} className="my-0" />
        </button>
      </div>
      <div className="mt-4">
        {active === 'grey' && (
          <p>
            {' '}
            <strong>Ahead (diritto)</strong>: colore grigio, la tessera viene attraversata da Roby senza alcuna
            rotazione, uscendo dal lato opposto a quello di ingresso. [stamparne 25 per giocare su una scacchiera 5×5]
          </p>
        )}
        {active === 'yellow' && (
          <p>
            <strong>Left (sinistra)</strong>: colore giallo, impone a Roby una rotazione di 90 gradi in senso
            antiorario, così che Roby esce dalla casella sul lato che vede alla propria sinistra entrando. [stamparne 25
            per giocare su una scacchiera 5×5]
          </p>
        )}
        {active === 'red' && (
          <p>
            <strong>Right (destra)</strong>: colore rosso, impone a Roby una rotazione di 90 gradi in senso orario, così
            che Roby esce dalla casella sul lato che vede alla propria destra entrando. [stamparne 25 per giocare su una
            scacchiera 5×5]
          </p>
        )}
        {active === 'start' && (
          <p>
            <strong>Start (partenza)</strong>: colore azzurro. Tessera da disporre all’esterno della scacchiera, con la
            freccia rivolta verso una casella del bordo della scacchiera. Indica il punto di ingresso di Roby nella
            scacchiera. [non è indispensabile, si consiglia di stamparne 2]
          </p>
        )}
        {active === 'target' && (
          <p>
            <strong>Target (arrivo)</strong>: colore azzurro. Tessera da disporre all’esterno della scacchiera, in
            corrispondenza del punto da cui si prevede (o si chiede) che Roby esca dalla scacchiera dopo averla
            percorsa. [non è indispensabile, si consiglia di stamparne 2]
          </p>
        )}
      </div>
    </>
  );
};

export default ButtonSelection;
