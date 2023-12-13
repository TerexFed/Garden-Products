import React from 'react';
import s from './SalePercent.module.css';

export default function SalePercent({ price, discountPrice }) {

  function count(price, discountPrice) {
    return 100 - Math.floor((discountPrice * 100) / price);
  }

  return (
    <div className={`${s.SalePercent}`}>
      {discountPrice !== null ? <p>-{count(price, discountPrice)}%</p> : null}
    </div>
  );
}
