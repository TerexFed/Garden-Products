const defaultData = []

const GETALLPRODUCTS = 'GETALLPRODUCTS'
const GETPRODUCTBYID = 'GETPRODUCTBYID'
const GETALLPRODUCTSSALES = 'GETALLPRODUCTSSALES'
const FILTER = 'FILTER'

export const productsReducer = (state = defaultData, action) => {
    switch (action.type) {

        case GETALLPRODUCTS:
            let changedAllProductsByFetch = action.payload.map(el => {
                el.isShowSale = true
                el.isShowPrice = true

                return el
            })
            return changedAllProductsByFetch

        case GETPRODUCTBYID:
            return [...action.payload]

        case GETALLPRODUCTSSALES:
            let changedSaleProductsByFetch = action.payload.map(el => {
                el.isShowSale = true
                el.isShowPrice = true

                return el
            })
            return changedSaleProductsByFetch

        case FILTER:
            const type = action.payload.type
            if (type === 'bySale') {
                let changedProductsBySale1 = state.map(el => {
                    el.isShowSale = (!action.payload.data) ? true : (Boolean(el.discont_price))
                    return el
                })
                return changedProductsBySale1
            }
            else if (type === 'byPrice') {
                let { max, min } = action.payload.data
                let changedProductsByPrice = state.map(el => {
                    el.isShowPrice = true
                    if (!(el.price >= min && el.price <= max)) {
                        el.isShowPrice = false
                    }
                    return el
                })
                return changedProductsByPrice
            }
            else if (type === 'bySelect') {
                let changedState = state
                switch (action.payload.data) {
                    case 'by default':
                        let sortedByDefault = [...changedState]
                        sortedByDefault.sort((a, b) => a.id - b.id)
                        return sortedByDefault
                    case 'newest':
                        let newestSortedProducts = [...changedState];
                        newestSortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        return newestSortedProducts;
                    case 'price: high-low':
                        let sortedProductsHighToLow = [...changedState]
                        sortedProductsHighToLow.sort((a, b) =>  (b.discont_price || b.price) - (a.discont_price || a.price))
                        return sortedProductsHighToLow
                    case 'price: low-high':
                        let sortedProductsLowToHigh = [...changedState]
                        sortedProductsLowToHigh.sort((a, b) =>  (a.discont_price || a.price) - (b.discont_price || b.price))
                        return sortedProductsLowToHigh
                    default:
                        return changedState;
                }
            }

            break
        default:
            return state
    }
}

export const getAllProductsAction = (payload) => ({ type: GETALLPRODUCTS, payload })
export const getProductByIDAction = (payload) => ({ type: GETPRODUCTBYID, payload })
export const getAllProductsSalesAction = (payload) => ({ type: GETALLPRODUCTSSALES, payload })
export const productsfilterAction = (payload) => ({ type: FILTER, payload })