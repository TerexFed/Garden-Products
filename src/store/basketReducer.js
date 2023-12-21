let defaultData = []


const saveBasket = Basket => {
    localStorage.setItem('basket', JSON.stringify({
        Basket
    }))
}

const isBasket = JSON.parse(localStorage.getItem('basket')).Basket


if (isBasket?.length > 0) {
    defaultData = isBasket
}

const ADDTOCARTNEWITEM = 'ADDTOCARTNEWITEM'
const CHANGECOUNT = 'CHANGECOUNT'
const DELETEFROMBASKET = 'DELETEFROMBASKET'
const RESETBASKET = 'RESETBASKET'

function changeCountItem(arr, id, count) {
    return arr.map(el => {
        if (el.id === id) {
            el.count += count
        }
        return el
    })
}

export const basketReducer = (state = defaultData, action) => {
    switch (action.type) {

        case ADDTOCARTNEWITEM:
            let { id, title, price, discount_price, image, count } = action.payload

            if (state.find(el => el.id === id)) {
                return changeCountItem(state, id, count)
            }
            else {
                let newItem = {
                    id,
                    title,
                    price,
                    discount_price,
                    image,
                    count
                }
                saveBasket([...state, newItem])
                return [...state, newItem]
            }
        case CHANGECOUNT:
            let NewBasket = changeCountItem(state, action.payload.id, action.payload.count)
            saveBasket(NewBasket)
            return NewBasket

        case DELETEFROMBASKET:
            saveBasket(state.filter(el => el.id !== action.payload))
            return state.filter(el => el.id !== action.payload)

        case RESETBASKET:
            const clearedState = []
            saveBasket(clearedState)
            return clearedState


        default:
            return state;
    }
};

export const addToCartNewItemAction = (payload) => ({ type: ADDTOCARTNEWITEM, payload });
export const changeCountAction = (payload) => ({ type: CHANGECOUNT, payload });
export const deleteFromBasketAction = (payload) => ({ type: DELETEFROMBASKET, payload });
export const resetBasketAction = () => ({ type: RESETBASKET });