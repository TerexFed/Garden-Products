const defaultData = []

const GETALLPRODUCTS = 'GETALLPRODUCTS'
const GETPRODUCTBYID = 'GETPRODUCTBYID'
const GETALLPRODUCTSSALES = 'GETALLPRODUCTSSALES'

export const productsReducer = (state = defaultData, action) => {
    switch (action.type) {

        case GETALLPRODUCTS:
            return [...action.payload]

        case GETPRODUCTBYID:
            return [...action.payload]

        case GETALLPRODUCTSSALES:
            return [...action.payload]


        default:
            return state
    }
}

export const getAllProductsAction = (payload) => ({ type: GETALLPRODUCTS, payload })
export const getProductByIDAction = (payload) => ({ type: GETPRODUCTBYID, payload })
export const getAllProductsSalesAction = (payload) => ({ type: GETALLPRODUCTSSALES, payload })
