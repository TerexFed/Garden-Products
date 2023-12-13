import React from 'react'
import Map from './Map'
import s from './Footer.module.css'
import Vk from '../../media/vk.svg'
import Phone from '../../media/phone.svg'

export default function Footer() {
    return (
        <div className={`${s.footer}`}>
            <h2>Contact</h2>
            <div className={`${s.grid}`}>
                <div className={`${s.card}`}>
                    <p>Phone</p>
                    <h3>+7 (499) 350-66-04</h3>
                </div>
                <div className={`${s.card}`}>
                    <p>Socials</p>
                    <div className={`${s.links}`}>
                        <a href='https://vk.company/ru/' target='blank'>
                            <img src={Vk} alt='Vk' />
                        </a>
                        <a href='https://www.whatsapp.com/?lang=ru_RU' target='blank'>
                            <img src={Phone} alt='Phone' />
                        </a>
                    </div>
                </div>
                <div className={`${s.card}`}>
                    <p>Address</p>
                    <h3>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
                </div>
                <div className={`${s.card}`}>
                    <p>Working hours</p>
                    <h3>24 hours a day</h3>
                </div>
            </div>
            <Map />
        </div>
    )
}
