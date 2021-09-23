export const initialState = {
    basket: [],
};

// selectors to return data derived from the state 

// basket total from basket
export const getBasketTotal = (basket) => 
    basket?.reduce((accumulator, item) => item.price + accumulator, 0);

export const getBasketQuantity = (basket) => 
    basket?.length

// reducer to change state based on given action
const reducer = (state, action) => {
    console.log(JSON.stringify(action.item));
    
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket =  [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warm(
                    `Cant remove product (id: ${action.id}) as its not in the basket`
                )
            }
            
            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default: 
            return state;
    }
}

export default reducer;