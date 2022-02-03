import axios from "axios"
import { Dispatch } from "react"
import { ProductAction, ProductActionTypes } from "../types/productsTypes"

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try{
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            const response = await axios.get('http://localhost:3001/products')
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
                payload: response.data
            })
        }catch(e) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Ошибка загузки товаров'
            })
        }
    }
} 