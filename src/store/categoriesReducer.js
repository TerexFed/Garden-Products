const defaultData = {
    categories_name: '',
    data: []
}

const GETALLCATEGORIES = 'GETALLCATEGORIES';
const GETCATEGORYBYID = 'GETCATEGORYBYID';

export const categoriesReducer = (state = defaultData, action) => {
    switch (action.type) {
        case GETALLCATEGORIES:
            return {categories_name: 'Categories', data: action.payload}

        case GETCATEGORYBYID:
            return {categories_name: action.payload.category.title, data: action.payload.data}

        default:
            return state;
    }
};

export const getAllCategoriesAction = (payload) => ({ type: GETALLCATEGORIES, payload });
export const getCategoryByIDAction = (payload) => ({ type: GETCATEGORYBYID, payload });
