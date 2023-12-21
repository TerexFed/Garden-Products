import React from 'react'
import s from './LineButton.module.css'
import { Link } from 'react-router-dom'

export default function LineButton({ title, link, linkText, salesRef }) {
    return (
        <div className={`${s.textandLineButton}`} ref={salesRef}>
            <h2>{title}</h2>
            <div className={`${s.lineAndButton}`}>
                <div className={`${s.line}`}></div>
                <Link to={link} onClick={() => window.scrollTo(0, 0)}>{linkText}</Link>
            </div>
        </div>
    )
}
