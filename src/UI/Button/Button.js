import React from 'react';
import s from './Button.module.css';

export default function Button({ title, color, textColor, onClick }) {
  const buttonClass = color === 'green' ? `${s.button} ${s.green}` : s.button;

  return (
    <button onClick={onClick} className={buttonClass} style={{ color: textColor }}>
      {title}
    </button>
  );
}
