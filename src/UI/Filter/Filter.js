import React, { useState, useEffect } from 'react';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { productsfilterAction } from '../../store/productsReducer';
import { categoryfilterAction } from '../../store/categoriesReducer';
import { useLocation } from 'react-router-dom';

export default function Filter() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('by default');

  useEffect(() => {
    setSelectedOption('by default');
  }, [location.pathname]);

  function formHandler(e) {
    let formData = new FormData(e.target.parentElement);
    let data = Object.fromEntries(formData);
    data.max = data.max ? +data.max : Infinity;
    data.min = (data.max && (+data.max >= data.min)) ? +data.min : 0;
    if (location.pathname.includes('products')) {
      dispatch(productsfilterAction({ type: 'byPrice', data: data }));
    }
    else {
      dispatch(categoryfilterAction({ type: 'byPrice', data: data }))
    }
  }

  function checkboxHandle(e) {
    if (location.pathname.includes('products')) {
      dispatch(productsfilterAction({ type: 'bySale', data: e.target.checked }))
    }
    else {
      dispatch(categoryfilterAction({ type: 'bySale', data: e.target.checked }))
    }
  }


  function selectHandle(e) {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    if (location.pathname.includes('products')) {
      dispatch(productsfilterAction({ type: 'bySelect', data: selectedValue }));
    }
    else {
      dispatch(categoryfilterAction({ type: 'bySelect', data: selectedValue }))
    }
  }

  return (
    <div className={`${s.filter}`}>
      <div className={`${s.filterOption}`}>
        <p>Price</p>
        <form onChange={formHandler}>
          <input name='min' type='number' placeholder='from' />
          <input name='max' type='number' placeholder='to' />
        </form>
      </div>
      {location.pathname !== '/products/sales' && (
        <div className={`${s.filterOption}`}>
          <p>Discounted items</p>
          <input onClick={(e) => checkboxHandle(e)} type='checkbox' />
        </div>
      )}
      <div className={`${s.filterOption}`}>
        <p>Sorted</p>
        <select value={selectedOption} onChange={(e) => selectHandle(e)}>
          <option value='by default'>by default</option>
          <option value='newest'>newest</option>
          <option value='price: high-low'>price: high-low</option>
          <option value='price: low-high'>price: low-high</option>
        </select>
      </div>
    </div>
  );
}
