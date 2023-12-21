import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { categoriesReducer } from './categoriesReducer'
import { productsReducer } from './productsReducer'
import { basketReducer } from './basketReducer'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    basket: basketReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))