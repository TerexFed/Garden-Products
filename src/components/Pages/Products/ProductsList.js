import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts, fetchAllProductsSale } from '../../../asyncActions/products'
import ProductListItem from './ProductsListItem'
import s from './Products.module.css'
import { Link, useLocation } from 'react-router-dom'
import { BASE_URL } from '../../../App'
import Filter from '../../../UI/Filter/Filter'

export default function ProductsList({ type, displayCount, salesRef }) {

    const products = useSelector(store => store.products).filter(el => el.isShowSale && el.isShowPrice)

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        if (type === 'all') {
            dispatch(fetchAllProducts());
        } else if (type === 'sale' || type === 'homesale') {
            dispatch(fetchAllProductsSale());
        }
    }, [location.pathname, type, dispatch]);

    let sortedProducts = [...products];

    if (type === 'homesale') {
        sortedProducts.sort((a, b) => {
            const discountPercentageA = ((a.price - a.discont_price) / a.price) * 100;
            const discountPercentageB = ((b.price - b.discont_price) / b.price) * 100;
            return discountPercentageB - discountPercentageA;
        });

        sortedProducts = sortedProducts.slice(0, displayCount);
    }



    return (
        <>
            {type !== 'homesale' && <Filter />}
            <div className={`${s.productsList}`} ref={salesRef}>
                {sortedProducts.map(el =>
                    <Link to={`/products/${el.id}`} key={el.id}>
                        <ProductListItem
                            id={el.id}
                            title={el.title}
                            image={`${`${BASE_URL + el.image}`}`}
                            price={el.price}
                            discontPrice={el.discont_price}
                        />
                    </Link>
                )}
            </div>
        </>
    )
}
