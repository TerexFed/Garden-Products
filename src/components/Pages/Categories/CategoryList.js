import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Category.module.css';
import { fetchAllCategories } from '../../../asyncActions/categories';
import CategoryItem from './CategoryItem';
import { BASE_URL } from '../../../App';
import { Link } from 'react-router-dom';

export default function CategoryList({ displayCount }) {
  const {categories_name, data} = useSelector((store) => store.categories);
  const displayedItems = data.slice(0, displayCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);



  return (
    <div className={`${s.categoriesList}`}>
      {displayedItems.map((el) => (
        <Link to={`/categories/${el.id}`} key={el.id}>
          <CategoryItem id={el.id} title={el.title} src={`${BASE_URL + el.image}`} />
        </Link>
      ))}
    </div>
  );
}
