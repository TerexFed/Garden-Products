import React from 'react'
import s from './Basket.module.css'
import LineButton from '../../../UI/LineButton/LineButton'
import Button from '../../../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import BasketList from './BasketList';
import OrderForm from './OrderForm';
import { useNavigate } from 'react-router-dom';


export default function BasketPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const basket = useSelector((store) => store.basket);


    return (

        <div className={`${s.basketPage}`}>
            <LineButton title={'Shopping cart'} link={'/products/all'} linkText={'Back to the store'} />

            {basket.length === 0 ?
                <div className={`${s.emptyBasket}`}>
                    <p>Looks like you have no items in your basket currently.</p>
                    <Button title={'Continue shopping'} color={'green'} textColor={'white'} onClick={() => navigate('/products/all')} />
                </div> :
                <div className={`${s.basket}`}>
                    <BasketList />
                    <OrderForm />
                </div>

            }
        </div>
    )
}
