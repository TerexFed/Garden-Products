import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minusAction, plusAction } from '../../store/amountReducer'
import s from './Amount.module.css'

export default function Amount() {

    const amount = useSelector(store => store.amount)
    const dispatch = useDispatch()


    return (
        <div className={`${s.amount}`}>
            <button className={`${s.button}`} onClick={() => (dispatch(minusAction()))}>-</button>
            <p>{amount}</p>
            <button className={`${s.button}`} onClick={() => (dispatch(plusAction()))}>+</button>
        </div >
    )
}
