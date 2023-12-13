import React from 'react'
import CategoryList from '../Categories/CategoryList'
import {  useNavigate } from 'react-router-dom'
import DiscountForm from './DiscountForm'
import Button from '../../../UI/Button/Button'
import ProductsList from '../Products/ProductsList'
import s from './Home.module.css'
import LineButton from '../../../UI/LineButton/LineButton'

export default function HomePage() {

  const navigate = useNavigate()

  return (
    <div className={`${s.homePage}`}>
      <div className={`${s.homePageImage}`}>
        <div className={`${s.imageContent}`}>
          <h1>Amazing Discounts on Garden Products!</h1>
          <Button title={'Check out'} color={'green'} textColor={'white'} onClick={() => navigate('/products/sales')} />
        </div>
      </div>
      
      <LineButton title={'Categories'} link={'/categories/all'} linkText={'All categories'} />
      <CategoryList displayCount={4} />
      <DiscountForm />
      <LineButton title={'Sales'} link={'/products/sales'} linkText={'All sales'} />
      <ProductsList type={'homesale'} displayCount={4} />
    </div>
  )
}
