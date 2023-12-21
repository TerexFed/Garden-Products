import React from 'react';
import s from './Button.module.css';

export default function Button({ title, color, textColor, onClick }) {
  const buttonClass = color === 'green' ? `${s.button} ${s.green}` : s.button;
  const isAdded = title === 'Added' && `${s.sended}`

  return (

    <button onClick={onClick} disabled={isAdded ? true : false} className={isAdded ? isAdded : buttonClass} style={{ color: isAdded ? 'rgba(40, 40, 40, 1)' : textColor, border: isAdded && '1px solid rgba(40, 40, 40, 1)' }}>
      {title}
    </button>
  );
}
