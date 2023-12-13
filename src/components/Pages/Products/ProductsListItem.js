import React from 'react';
import s from './Products.module.css';
import SalePercent from '../../../UI/SalePercent/SalePercent';
import Button from '../../../UI/Button/Button';

export default function ProductListItem({ title, image, price, discontPrice }) {
    function showSalePercent() {
        if (discontPrice !== null) {
            return <SalePercent price={price} discountPrice={discontPrice} />;
        }
    }

    return (
        <div className={`${s.productListItem}`}>
            <div className={`${s.salePercentContainer}`}>{showSalePercent()}</div>
            <div className={`${s.imgContainer}`}>
                <img src={image} alt={title} className={`${s.img}`} />
                <div className={`${s.buttonContainer}`}>
                    <Button
                        className={`${s.addToCartButton}`}
                        title={'Add to cart'}
                        textColor={'white'}
                        color={'green'}
                    />
                </div>
            </div>
            <p className={`${s.container}`}>{title}</p>
            {discontPrice == null ? (
                <h3>${price}</h3>
            ) : (
                <div className={`${s.prices}`}>
                    <h3>${discontPrice}</h3>
                    <p>${price}</p>
                </div>
            )}
        </div>
    );
}
