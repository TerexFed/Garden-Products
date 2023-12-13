import React from 'react'
import s from './DiscountButton.module.css'

export default function DiscountButton({ discountButtonText }) {

    return (
        <button
            type='submit'
            className={(discountButtonText === 'Request submitted' ? `${s.sended}` : `${s.button}`)}
            disabled={(discountButtonText === 'Request submitted' ? true : false)}
        >
            {discountButtonText}
        </button >
    )
}