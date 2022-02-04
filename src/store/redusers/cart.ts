import { CartAction, CartActionTypes, CartState } from "../types/cartTypes";
import { IProduct } from "../../types/types";

const initialState: CartState = {
    productsInCart: [],
    loading: false,
    error: null,
    countInCart: 0,
    totalPrice: 0
}

const getTotalPrice = (arr: IProduct[]) => arr.reduce((sum: number, product: IProduct) => sum + product.price , 0)

export const cartReducer = (state = initialState, action: CartAction ):CartState => {
    switch(action.type) {
        case CartActionTypes.FETCH_CART:
            return {
                ...state, 
                error: null, 
                countInCart: 0,
                loading: true,  
                totalPrice: 0, 
                productsInCart: []
            }
        case CartActionTypes.FETCH_CART_SUCCESS:
            return {
                ...state, 
                error: null, 
                productsInCart: action.payload,
                countInCart: action.payload.length,
                loading: false, 
                totalPrice: getTotalPrice(action.payload)
            }
        case CartActionTypes.FETCH_CART_ADD:
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload],

            }
        case CartActionTypes.FETCH_CART_DELETE:
            return {
                ...state,
                productsInCart: state.productsInCart.filter(product => product.id !== action.payload)
            }
        case CartActionTypes.FETCH_CART_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}