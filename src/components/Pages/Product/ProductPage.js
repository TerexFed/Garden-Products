import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByID } from '../../../asyncActions/products';
import { useNavigate, useParams } from 'react-router-dom';
import s from './ProductPage.module.css'
import { BASE_URL } from '../../../App';
import Amount from '../../../UI/Amount/Amount';
import Button from '../../../UI/Button/Button';
import SalePercent from '../../../UI/SalePercent/SalePercent';
import NotFoundPage from '../NotFound/NotFoundPage';

export default function ProductPage() {
  const product = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();


  useEffect(() => {
  
  id <= 35 ? dispatch(fetchProductByID(id)) : navigate('/error')
  }, [dispatch, id]);

  return (
    <div className={s.product}>
      <img className={s.img} src={`${`${BASE_URL + product[0]?.image}`}`} alt={product[0]?.title} />
      <div className={s.textContent}>

        <h3>{product[0]?.title}</h3>
        {product[0]?.discont_price == null ?
          <h3>${product[0]?.price}</h3>
          :
          <div className={`${s.productPrices}`}>
            <div className={`${s.prices}`}>
              <h3>${product[0]?.discont_price}</h3>
              <p>${product[0]?.price}</p>
            </div>
            <SalePercent price={product[0]?.price} discountPrice={product[0]?.discont_price} />
          </div>}
        <div className={`${s.flex}`}>
          <Amount />
          <Button
            title={'Add to cart'}
            textColor={'white'}
            color={'green'} />
        </div>
        <div className={`${s.text}`}>
          <p>Description</p>
          <sup>{product[0]?.description}</sup>
        </div>


      </div>
    </div>
  );
}
