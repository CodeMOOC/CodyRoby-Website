import React, { useState } from 'react';

// Import full metadata object
import yellow from '~/assets/images/codycolor/yellow-150x150.png';
import red from '~/assets/images/codycolor/red-150x150.png';
import grey from '~/assets/images/codycolor/grey-150x150.png';
import start from '~/assets/images/codycolor/start-150x150.png';
import target from '~/assets/images/codycolor/target-150x150.png';

interface ButtonData {
  color: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: string;
}

interface ButtonSelectionProps {
  buttons: ButtonData[];
}

const ButtonSelection: React.FC<ButtonSelectionProps> = ({ buttons }) => {
  const [active, setActive] = useState(buttons[0].color);

  // Update the active state when a button is clicked
  const changeTextToView = (color: string) => {
    setActive(color);
  };

  // Define a function to determine button class
  const buttonClass = (color: string) =>
    `border-2 p-2 rounded-xl ${active === color ? 'border-slate-500' : 'border-transparent'}`;

  return (
    <>
      <div className="flex gap-4">
        {buttons.map((button) => (
          <button
            key={button.color}
            className={buttonClass(button.color)}
            onClick={() => changeTextToView(button.color)}
          >
            <img
              src={button.image.src}
              alt={button.color}
              width={button.image.width}
              height={button.image.height}
              className="my-0"
            />
          </button>
        ))}
      </div>

      <div className="mt-4">
        {buttons.map(
          (button) =>
            active === button.color && (
              <p key={button.color}>
                <strong>{button.color}</strong>: {button.text}
              </p>
            )
        )}
      </div>
    </>
  );
};

export default ButtonSelection;
