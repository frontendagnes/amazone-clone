export const initialState = {
    basket: [],
    user: null,
}
//Selector sum of the prices in the basket
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)
    
export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
    SET_USER: 'SET_USER',
    EMPTY_BASKET: 'EMPTY_BASKET',
}

const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_BASKET:
            return{
                ...state,
                basket: [...state.basket, action.item]
            }
        case actionTypes.EMPTY_BASKET:
            return{
               ...state,
               basket: []
            }
        case actionTypes.REMOVE_FROM_BASKET:
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            ) 
            let newBasket = [...state.basket]
            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
            }
            return{
                ...state,
                basket: newBasket,
            }
            // return{ usuwanie duplikatów
            //     ...state,
            //     basket: state.basket.filter(item => item.id !== action.id)
            // }
            case actionTypes.SET_USER:
                return{
                    ...state,
                    user: action.user,
                }
        default:
            return state
    }
}

export default reducer