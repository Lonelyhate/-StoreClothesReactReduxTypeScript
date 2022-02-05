import { ProductState, ProductAction, ProductActionTypes } from "../types/productsTypes";

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
    countProducts: 0,
    currentProduct: null
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
                products: action.payload.products,
                countProducts: action.payload.products.length,
                error: null
            }
        case ProductActionTypes.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                products: []
            }
        case ProductActionTypes.FETCH_PRODUCTS__SEARCH:
            let newProducts = action.payload
            if (action.value) {
                newProducts = action.payload.filter(product => product.title.toLowerCase().includes(action.value.toLowerCase()))
            } 
            return {
                ...state,
                products: newProducts,
                countProducts: newProducts.length
            }
        case ProductActionTypes.GET_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: action.payload,
                loading: false
            }
        default:
            return state
    }
}