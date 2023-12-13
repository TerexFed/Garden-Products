import { BASE_URL } from "../App"
import { getAllCategoriesAction, getCategoryByIDAction } from "../store/categoriesReducer"

export function fetchAllCategories() {
    return function (dispatch) {
        fetch(`${BASE_URL}categories/all`)
            .then(res => res.json())
            .then(data => dispatch(getAllCategoriesAction(data)))
    }
}

export function fetchCategoryByID(id) {
    return function (dispatch) {
        fetch(`${BASE_URL}categories/` + id)
            .then(res => res.json())
            .then(data => dispatch(getCategoryByIDAction(data)))
    }
}