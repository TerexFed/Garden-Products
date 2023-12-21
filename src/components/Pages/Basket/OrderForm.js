import React, { useEffect, useState } from 'react'
import s from './Basket.module.css'
import { useForm } from 'react-hook-form'
import DiscountButton from '../../../UI/DiscountButton/DiscountButton'
import Cross from '../../../media/cross.svg'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../../App'
import { resetBasketAction } from '../../../store/basketReducer'


export default function OrderForm() {

    const basket = useSelector((store) => store.basket);
    const [discountButtonText, setDiscoundButtonText] = useState('Order')
    const [openModal, setopenModal] = useState(false)
    const overlayClassName = openModal ? `${s.overlay} ${s.overlayVisible}` : s.overlay;
    const dispatch = useDispatch()



    function changeInnerText(text) {
        setDiscoundButtonText(text)
    }

    let {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: 'onSubmit' })

    const onSubmit = async (data) => {
        reset()
        let response = await fetch(`${BASE_URL}order/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data })
        })
        const res = await response.json()
        res && setopenModal(true)
        changeInnerText('The Order is Placed')
    }

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openModal]);

    let inputName = {
        ...register('Name', {
            required: 'Имя обязательно к заполнению'
        })
    }

    let inputPhone = {
        ...register('Phone', {
            required: 'Телефон обязателен к заполнению',
            pattern: {
                value: /^(\+7|8)\s?\(?(\d{3})\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
                message: 'Телефон должен соответствовать (+7|8)(XXX)XXX-XXX'
            }
        })
    }

    let inputEmail = {
        ...register('Email', {
            required: 'Почта обязательна к заполнению',
            pattern: {
                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Почта должна соответствовать маске'
            }
        })
    }

    return (
        <div className={`${s.orderForm}`}>
            <h2>Order details</h2>
            <div className={`${s.orderInfo}`}>
                <h3>{basket.reduce((total, item) => total + item.count, 0)} items total</h3>
                <h2>${basket.reduce((total, item) => total + ((item.discount_price !== null ? item.discount_price : item.price) * item.count), 0).toFixed(2)}</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={`${s.form}`}>
                <input
                    disabled={(discountButtonText === 'The Order is Placed' ? true : false)}
                    placeholder='Name'
                    {...inputName} >
                </input>

                {errors.Name && <p>{errors.Name.message}</p>}
                <input
                    disabled={(discountButtonText === 'The Order is Placed' ? true : false)}
                    placeholder='Phone number'
                    {...inputPhone} >
                </input>

                {errors.Phone && <p className={`${s.errortext}`}>{errors.Phone.message}</p>}
                <input
                    disabled={(discountButtonText === 'The Order is Placed' ? true : false)}
                    placeholder='Email'
                    {...inputEmail} >
                </input>
                {errors.Email && <p className={`${s.errortext}`}>{errors.Email.message}</p>}

                <DiscountButton discountButtonText={discountButtonText} onClick={handleSubmit(onSubmit)} />
            </form>
            {openModal &&
                <>
                    <div className={overlayClassName}>
                        <div className={`${s.modal}`}>
                            <div className={`${s.modalText}`}>
                                <h3>Congratulations! </h3>
                                <p>Your order has been successfully placed on the website.
                                    A manager will contact you shortly to confirm your order.</p>
                            </div>
                            <img src={Cross} alt='cross' onClick={() => {
                                setopenModal(false)
                                dispatch(resetBasketAction())
                                }} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
