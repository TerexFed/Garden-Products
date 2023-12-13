import React from 'react'
import Logo from '../../media/logo.svg'
import BasketIcon from '../../media/basket-empty.svg'
import { Link } from 'react-router-dom'
import s from './Header.module.css'

export default function Header() {
    return (
        <div className={`${s.header}`}>
            <Link to={'/'}>
                <img src={Logo} alt='Logo' width='70px' height='70px' />
            </Link>

            <div>
                <Link to={'/'} className={`${s.link}`}>
                    Main Page
                </Link>
                <Link to={'/categories/all'} className={`${s.link}`}>
                    Categories
                </Link>
                <Link to={'/products/all'} className={`${s.link}`}>
                    All products
                </Link>
                <Link to={'/products/sales'} className={`${s.link}`}>
                    All sales
                </Link>
            </div>
            <Link to={'/basket'}>
                <img src={BasketIcon} alt='BasketIcon' width='44px' height='48px' />
            </Link>
        </div>
    )
}
