import axios from "axios"
import { Dispatch } from "react"
import { IProduct } from "../../types/types"
import { CartAction, CartActionTypes } from "../types/cartTypes"

export const fetchCartProducts = () => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({type: CartActionTypes.FETCH_CART})
            const response = await axios.get('/cart')
            dispatch({
                type: CartActionTypes.FETCH_CART_SUCCESS,
                payload: response.data
            })
        } catch(e) {
            dispatch({
                type: CartActionTypes.FETCH_CART_ERROR,
                payload: 'Ошибка загрузки корзины'
            })
        }
    }
}

export const fetchAddToCart = (product: IProduct) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({
                type: CartActionTypes.FETCH_CART_ADD,
                payload: product
            })
            
            await axios.post('/cart', product)
        } catch(e) {
            dispatch({
                type: CartActionTypes.FETCH_CART_ERROR,
                payload: 'Не получилось добавить в корзину'
            })
        }
    }
}

export const fetchDeleteFromCart = (id: number) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({
                type: CartActionTypes.FETCH_CART_DELETE,
                payload: id
            })
            await axios.delete(`/cart/${id}`)
        } catch(e) {
            dispatch({
                type: CartActionTypes.FETCH_CART_ERROR,
                payload: 'Не удалось удалить товар из корзины'
            })
        }
    }
}