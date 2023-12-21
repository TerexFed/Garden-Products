import React, { useState } from 'react';
import Logo from '../../media/logo.svg';
import BasketIcon from '../../media/basket-empty.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import s from './Header.module.css';


export default function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const basket = useSelector(store => store.basket)
    const basketLength = basket.length

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    };

    return (
        <div className={`${s.header}`}>
            <img src={Logo} alt='Logo' width='70px' height='70px' />


            <div className={`${s.links} ${isMenuOpen ? s.mobileMenu : ''}`}>
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

            <div className={s.burger} onClick={toggleMenu}>
                <div className={`${s.bar} ${isMenuOpen ? s.open : ''}`}></div>
                <div className={`${s.bar} ${isMenuOpen ? s.open : ''}`}></div>
                <div className={`${s.bar} ${isMenuOpen ? s.open : ''}`}></div>
            </div>

            <Link to={'/basket'}>
                {basketLength > 0 && <p className={`${s.countBasket}`}>{basket.reduce((total, item) => total + item.count , 0)}</p>}
                <img className={`${s.basketIcon}`} src={BasketIcon} alt='BasketIcon' width='44px' height='48px' />
            </Link>
        </div>
    );
}
