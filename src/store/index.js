import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { categoriesReducer } from './categoriesReducer'
import { productsReducer } from './productsReducer'
import { amountReducer } from './amountReducer'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    amount: amountReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))