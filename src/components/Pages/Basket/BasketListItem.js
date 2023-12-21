import React from 'react'
import s from './Basket.module.css'
import Amount from '../../../UI/Amount/Amount'
import Cross from '../../../media/cross.svg'
import { useDispatch } from 'react-redux'
import { changeCountAction, deleteFromBasketAction } from '../../../store/basketReducer'

export default function BasketListItem({ id, title, price, image, discountPrice, count }) {

    const dispatch = useDispatch()

    function countOperation(oper, id) {
        if (oper === '-') {
            dispatch(changeCountAction(id, -1))
        }
        else if (oper === '+') {
            dispatch(changeCountAction(id, 1))
        }
    }


    return (
        <div className={`${s.basketListItem}`}>
            <img src={image} alt={title} />
            <div className={`${s.info}`}>
                <p>{title}</p>
                <div className={`${s.counterPrice}`}>
                    <Amount
                        id={id}
                        count={count}
                        onChange={count < 1 && dispatch(deleteFromBasketAction(id))}
                        operations={countOperation}
                    />
                    {discountPrice ?
                        <div className={`${s.prices}`}>
                            <h3>${discountPrice}</h3>
                            <p>${price}</p>
                        </div>
                        :
                        <div className={`${s.prices}`} >
                            <h3>${price}</h3>
                        </div>
                    }
                </div>
            </div>
            <img src={Cross} alt='cross' onClick={() => dispatch(deleteFromBasketAction(id))
            } />
        </div>
    )
}
