const defaultData = {
    categories_name: '',
    data: []
}

const GETALLCATEGORIES = 'GETALLCATEGORIES';
const GETCATEGORYBYID = 'GETCATEGORYBYID';
const FILTER = 'FILTER'

export const categoriesReducer = (state = defaultData, action) => {
    switch (action.type) {
        case GETALLCATEGORIES:
            return { categories_name: 'Categories', data: action.payload }

        case GETCATEGORYBYID:
            let changedCategoryByFetch = action.payload.data.map(el => {
                el.isShowSale = true
                el.isShowPrice = true
                return el
            })
            return { categories_name: action.payload.category.title, data: changedCategoryByFetch }

        case FILTER:
            const type = action.payload.type
            if (type === 'bySale') {
                let changedProductsBySale = state.data.map(el => {
                    el.isShowSale = (!action.payload.data) ? true : (Boolean(el.discont_price))
                    return el
                })
                return { categories_name: state.categories_name, data: changedProductsBySale }
            }
            else if (type === 'byPrice') {
                let { max, min } = action.payload.data
                let changedProductsByPrice = state.data.map(el => {
                    el.isShowPrice = true
                    if (!(el.price >= min && el.price <= max)) {
                        el.isShowPrice = false
                    }
                    return el
                })
                return { categories_name: state.categories_name, data: changedProductsByPrice }
            }
            else if (type === 'bySelect') {
                let changedState = state.data
                switch (action.payload.data) {
                    case 'by default':
                        let sortedByDefault = [...changedState]
                        sortedByDefault.sort((a, b) => a.id - b.id)
                        return { categories_name: state.categories_name, data: sortedByDefault }
                    case 'newest':
                        let newestSortedProducts = [...changedState];
                        newestSortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                        return { categories_name: state.categories_name, data: newestSortedProducts }
                    case 'price: high-low':
                        let sortedProductsHighToLow = [...changedState]
                        sortedProductsHighToLow.sort((a, b) =>  (b.discont_price || b.price) - (a.discont_price || a.price))
                        return { categories_name: state.categories_name, data: sortedProductsHighToLow }
                    case 'price: low-high':
                        let sortedProductsLowToHigh = [...changedState]
                        sortedProductsLowToHigh.sort((a, b) =>  (a.discont_price || a.price) - (b.discont_price || b.price))
                        return { categories_name: state.categories_name, data: sortedProductsLowToHigh }
                    default:
                        return changedState;
                }
            }

            break;
        default:
            return state;
    }
};

export const getAllCategoriesAction = (payload) => ({ type: GETALLCATEGORIES, payload });
export const getCategoryByIDAction = (payload) => ({ type: GETCATEGORYBYID, payload });
export const categoryfilterAction = (payload) => ({ type: FILTER, payload })
