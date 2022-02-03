import { ProductState, ProductAction, ProductActionTypes } from "../types/productsTypes";

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
}

export const productsReducer = (state = initialState, action: ProductAction):ProductState => {
    switch(action.type) {
        case ProductActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                loading: true,
                products: [],
                error: null
            }
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            }
        case ProductActionTypes.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                products: []
            }
        default:
            return state
    }
}