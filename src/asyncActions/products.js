import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../App"
import { getAllProductsAction, getAllProductsSalesAction, getProductByIDAction } from "../store/productsReducer"






export function fetchAllProducts() {
    return function (dispatch) {
        fetch(`${BASE_URL}products/all`)
            .then(res => res.json())
            .then(data => dispatch(getAllProductsAction(data)))
    }
}
export function fetchProductByID(id) {
    return function (dispatch) {
        fetch(`${BASE_URL}products/` + id)
            .then(res => res.json())
            .then(data => dispatch(getProductByIDAction(data)))
    }
}

export function fetchAllProductsSale() {
    return function (dispatch) {
        fetch(`${BASE_URL}products/all`)
            .then(res => res.json())
            .then(data => {
                let filter_data = data.filter(el => el.discont_price)
                dispatch(getAllProductsSalesAction(filter_data))
            })
    }
}
