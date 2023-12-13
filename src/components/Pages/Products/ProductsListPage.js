import React from 'react'
import ProductsList from './ProductsList'
import s from './Products.module.css'

export default function ProductsListPage({ type, title }) {
  return (
    <div className={s.productsListPage}>
      <h2>{title}</h2>
      <ProductsList type={type} />
    </div>
  )
}
