export const initialState = {
    basket: [],
};

// selector to return data derived from the state (basket total from basket)
export const getBasketTotal = (basket) => 
    basket?.reduce((accumulator, item) => item.price + accumulator, 0);

// reducer to change state based on given action
const reducer = (state, action) => {
    console.log(JSON.stringify(action.item))
    
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default: 
            return state;
    }
}

export default reducer;