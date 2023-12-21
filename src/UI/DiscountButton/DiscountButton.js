import React from 'react'
import s from './DiscountButton.module.css'

export default function DiscountButton({ discountButtonText, onClick }) {

    return (
        <button
            type='submit'
            className={(discountButtonText === 'Request submitted' || discountButtonText=== 'The Order is Placed' ? `${s.sended}` : `${s.button}`)}
            disabled={(discountButtonText === 'Request submitted' || discountButtonText=== 'The Order is Placed' ? true : false)}
            onClick={onClick}
        >
            {discountButtonText}
        </button >
    )
}