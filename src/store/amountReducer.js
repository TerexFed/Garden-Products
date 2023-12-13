const defaultData = 0

const PLUS = 'PLUS';
const MINUS = 'MINUS';

export const amountReducer = (state = defaultData, action) => {
    switch (action.type) {
        case PLUS:
            return state + 1

        case MINUS:
            return state > 0 ? state - 1 : state

        default:
            return state;
    }
};

export const plusAction = () => ({ type: PLUS });
export const minusAction = () => ({ type: MINUS });