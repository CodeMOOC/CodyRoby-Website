import React, { useState } from 'react';

// Import full metadata object
import yellow from '~/assets/images/metodi/codycolor/yellow-150x150.png';
import red from '~/assets/images/metodi/codycolor/red-150x150.png';
import grey from '~/assets/images/metodi/codycolor/grey-150x150.png';
import start from '~/assets/images/metodi/codycolor/start-150x150.png';
import target from '~/assets/images/metodi/codycolor/target-150x150.png';
import type { ButtonExplanationData } from '~/types';

interface ButtonSelectionProps {
  buttons: ButtonExplanationData[];
}

const ButtonSelection: React.FC<ButtonSelectionProps> = ({ buttons }) => {
  const [active, setActive] = useState(buttons[0].action);

  // Update the active state when a button is clicked
  const changeTextToView = (color: string) => {
    setActive(color);
  };

  // Define a function to determine button class
  const buttonClass = (color: string) =>
    `border-2 p-1 md:p-2 rounded-xl ${active === color ? 'border-slate-500' : 'border-transparent'}`;

  return (
    <div className="prose-page">
      <div className="border border-black p-4 rounded-lg bg-slate-100 dark:bg-slate-700">
        <div className="flex justify-center gap-4">
          {buttons.map((button) => (
            <button
              key={button.action}
              className={buttonClass(button.action)}
              onClick={() => changeTextToView(button.action)}
            >
              <div className="not-prose">
                <img
                  src={button.image.src}
                  alt={button.action}
                  width={button.image.width}
                  height={button.image.height}
                  className="my-0"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 prose-page">
          {buttons.map(
            (button) =>
              active === button.action && (
                <p key={button.action}>
                  <strong>{button.action}</strong>
                  {button.text && `: ${button.text}`}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonSelection;
