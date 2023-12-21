const defaultData = JSON.parse(localStorage.getItem('basket'))?.Basket || [];

const saveBasket = (basket) => {
    localStorage.setItem('basket', JSON.stringify({ Basket: basket }));
};

const ADDTOCARTNEWITEM = 'ADDTOCARTNEWITEM';
const CHANGECOUNT = 'CHANGECOUNT';
const DELETEFROMBASKET = 'DELETEFROMBASKET';
const RESETBASKET = 'RESETBASKET';

const changeCountItem = (arr, id, count) => {
    return arr.map((el) => (el.id === id ? { ...el, count: el.count + count } : el));
};

export const basketReducer = (state = defaultData, action) => {
    switch (action.type) {
        case ADDTOCARTNEWITEM:
            const { id, title, price, discount_price, image, count } = action.payload;

            if (state.find((el) => el.id === id)) {
                return changeCountItem(state, id, count);
            } else {
                const newItem = {
                    id,
                    title,
                    price,
                    discount_price,
                    image,
                    count,
                };
                const updatedBasket = [...state, newItem];
                saveBasket(updatedBasket);
                return updatedBasket;
            }

        case CHANGECOUNT:
            const newBasket = changeCountItem(state, action.payload.id, action.payload.count);
            saveBasket(newBasket);
            return newBasket;

        case DELETEFROMBASKET:
            const filteredBasket = state.filter((el) => el.id !== action.payload);
            saveBasket(filteredBasket);
            return filteredBasket;

        case RESETBASKET:
            const clearedState = [];
            saveBasket(clearedState);
            return clearedState;

        default:
            return state;
    }
};

export const addToCartNewItemAction = (payload) => ({ type: ADDTOCARTNEWITEM, payload });
export const changeCountAction = (payload) => ({ type: CHANGECOUNT, payload });
export const deleteFromBasketAction = (payload) => ({ type: DELETEFROMBASKET, payload });
export const resetBasketAction = () => ({ type: RESETBASKET });
