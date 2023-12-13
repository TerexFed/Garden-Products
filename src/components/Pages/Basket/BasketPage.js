import React from 'react'
import s from './Basket.module.css'
import LineButton from '../../../UI/LineButton/LineButton'
import Button from '../../../UI/Button/Button'

export default function BasketPage() {
    return (

        <div className={`${s.basketPage}`}>
            <LineButton title={'Shopping cart'} link={'/products/all'} linkText={'Back to the store'} />
            <div className={`${s.emptyBasket}`}>
                <p>Looks like you have no items in your basket currently.</p>
                <Button title={'Continue shopping'} color={'green'} textColor={'white'} />
            </div>
        </div>
    )
}
