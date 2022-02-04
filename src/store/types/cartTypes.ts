import { IProduct } from "../../types/types";

export interface CartState {
    productsInCart: IProduct[]
    loading: boolean
    error: null | string
    countInCart: number
    totalPrice: number
}

export enum CartActionTypes {
    FETCH_CART = "FETCH_CART",
    FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS',
    FETCH_CART_ERROR = 'FETCH_CART_ERROR',
    FETCH_CART_ADD = 'FETCH_CART_ADD',
    FETCH_CART_DELETE = 'FETCH_CART_DELETE'
}

interface fetchCartAction {
    type: CartActionTypes.FETCH_CART
}

interface fetchCartSuccessAction {
    type: CartActionTypes.FETCH_CART_SUCCESS
    payload: IProduct[]
}

interface fetchCartError {
    type: CartActionTypes.FETCH_CART_ERROR
    payload: string
}

interface fetchAddCart {
    type: CartActionTypes.FETCH_CART_ADD
    payload: IProduct
}

interface fetchDeleteCart {
    type: CartActionTypes.FETCH_CART_DELETE
    payload: number
}

export type CartAction = fetchCartAction | fetchCartSuccessAction | fetchCartError | fetchAddCart | fetchDeleteCart
