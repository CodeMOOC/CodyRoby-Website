import React, { useState, useEffect } from 'react';
import { decode } from 'blurhash';

const BlurhashImage = ({ src, blurhash, width = 32, height = 32, imgClass = '' }) => {
  const [blurDataURL, setBlurDataURL] = useState('');

  useEffect(() => {
    if (blurhash) {
      // Decode the Blurhash into an image
      const pixels = decode(blurhash, width, height);
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      const imageData = ctx.createImageData(width, height);
      imageData.data.set(new Uint8ClampedArray(pixels));
      ctx.putImageData(imageData, 0, 0);
      const dataURL = canvas.toDataURL();
      setBlurDataURL(dataURL);
    }
  }, [blurhash, width, height]);

  return (
    <div className="relative">
      {/* Placeholder */}
      {blurDataURL && (
        <img
          src={blurDataURL}
          alt="Placeholder"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur transition-opacity"
        />
      )}

      <img
        src={src}
        alt="Final Image"
        className={`${imgClass} object-cover w-full h-full transition-opacity`}
        onLoad={(e) => {
          const target = e.target;
          target.style.opacity = '1';
        }}
        style={{ opacity: 0 }}
      />
    </div>
  );
};

export default BlurhashImage;
