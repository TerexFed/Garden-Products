import React from 'react'
import s from './Category.module.css'
import CategoriesList from './CategoryList'
import { useSelector } from 'react-redux';

export default function CategoriesPage() {
    const category = useSelector((store) => store.categories);

    return (
        <div className={`${s.categoriesPage}`}>
            <h2>{category.categories_name}</h2>
            <CategoriesList displayCount={5} />
        </div>
    )
}
