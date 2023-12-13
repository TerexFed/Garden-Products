import React from 'react'
import s from './LineButton.module.css'
import { Link } from 'react-router-dom'

export default function LineButton({ title, link, linkText }) {
    return (
        <div className={`${s.textandLineButton}`}>
            <h2>{title}</h2>
            <div className={`${s.lineAndButton}`}>
                <div className={`${s.line}`}></div>
                <Link to={link}>{linkText}</Link>
            </div>
        </div>
    )
}
