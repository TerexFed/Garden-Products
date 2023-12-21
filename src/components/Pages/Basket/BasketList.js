import React from 'react'
import s from './Basket.module.css'
import BasketListItem from './BasketListItem'
import { useSelector } from 'react-redux';

export default function BasketList() {
    const basket = useSelector((store) => store.basket);
    console.log(basket);

    return (
        <div className={`${s.basketList}`}>
            {basket.map(el => {
                return <BasketListItem
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    price={el.price}
                    image={el.image}
                    discountPrice={el.discount_price}
                    count={el.count}
                />
            })}
        </div>
    )
}
