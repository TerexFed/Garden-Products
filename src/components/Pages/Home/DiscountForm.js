import React, { useState } from 'react'
import s from './Home.module.css'
import { useForm } from 'react-hook-form'
import DiscountButton from '../../../UI/DiscountButton/DiscountButton'
import { BASE_URL } from '../../../App'

export default function DiscountForm() {

    const [discountButtonText, setDiscoundButtonText] = useState('Get a discount')

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
        changeInnerText('Request submitted')
        let response = await fetch(`${BASE_URL}sale/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data })
        })
        const res = await response.json()
        alert(`Dear ${data.Name} your ${res.message}`)
    }

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
        <div className={`${s.discountForm}`}>
            <h2>5% off on the first order</h2>
            <div className={`${s.content}`}>
                <div className={`${s.hands}`}></div>
                <form onSubmit={handleSubmit(onSubmit)} className={`${s.form}`}>
                    <input
                        disabled={(discountButtonText === 'Request submitted' ? true : false)}
                        placeholder='Name'
                        {...inputName} >
                    </input>

                    {errors.Name && <p className={`${s.errortext}`}>{errors.Name.message}</p>}
                    <input
                        disabled={(discountButtonText === 'Request submitted' ? true : false)}
                        placeholder='Phone number'
                        {...inputPhone} >
                    </input>

                    {errors.Phone && <p className={`${s.errortext}`}>{errors.Phone.message}</p>}
                    <input
                        disabled={(discountButtonText === 'Request submitted' ? true : false)}
                        placeholder='Email'
                        {...inputEmail} >
                    </input>
                    {errors.Email && <p className={`${s.errortext}`}>{errors.Email.message}</p>}

                    <DiscountButton discountButtonText={discountButtonText} />
                </form>
            </div>

        </div>
    )
}
