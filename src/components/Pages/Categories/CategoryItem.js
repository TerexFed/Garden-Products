import React from 'react'
import s from './Category.module.css'

export default function CategoryItem({ id, title, src }) {
    return (
        <div className={`${s.categoryItem}`} key={id}>
            <img src={src} alt={title} className={`${s.img}`} />
            <p>{title}</p>
        </div>
    )
}
