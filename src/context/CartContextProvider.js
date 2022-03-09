import React, {useReducer, createContext, useEffect} from 'react';

const initialState = {
    selectedItem: [], 
    total: 0,
    checkout:false
}

const shopReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            if(!state.selectedItem.find(item => item.url === action.payload.url)) { 
                state.selectedItem.push({
                    ...action.payload, 
                    quantity:1
                })
                localStorage.setItem("cart", JSON.stringify(state.selectedItem))
            
                console.log(state)
            } 

            return {
                ...state, 
                selectedItem:[...state.selectedItem]
            }    
        case "REMOVE_ITEM":
            localStorage.clear("cart")
            const newSelectedItem = state.selectedItem.filter(item => item.url !== action.payload.url)
            localStorage.setItem("cart", JSON.stringify(state.selectedItem = newSelectedItem))
            
            return {
                ...state, 
                selectedItem: [...newSelectedItem]
            }
            case "CHECKOUT":
                return {
                    selectedItem: [], 
                    total: 0, 
                    checkout:true
                }
                default:
                    return state       
    }
}

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    
    const [state, dispatch] = useReducer(shopReducer, initialState)
    const local = localStorage.getItem("cart")
        if(local) {
            state.selectedItem = JSON.parse(local)
            console.log(JSON.parse(local))
            console.log(state.selectedItem)
        }

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;