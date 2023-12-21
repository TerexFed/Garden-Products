import React from 'react'
import s from './Amount.module.css'
import { useDispatch } from 'react-redux'
import { changeCountAction } from '../../store/basketReducer'


export default function Amount({ id, count, onChange, operations }) {
  const dispatch = useDispatch()
  const countAction = (id, count) => dispatch(changeCountAction({ id, count }))

  return (
    <div className={`${s.amount}`} onChange={() => onChange}>
      <button className={`${s.button}`} onClick={() => {
        operations('-', id)
        countAction(id, -1)

      }}>-</button>
      <p>{count}</p>
      <button className={`${s.button}`} onClick={() => {
        operations('+', id)
        countAction(id, 1)

      }}>+</button>
    </div>
  )
}
