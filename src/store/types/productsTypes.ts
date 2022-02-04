import { IProduct } from "../../types/types";

export interface ProductState {
    products: IProduct[],
    loading: boolean,
    error: null | string,
    countProducts: number
}

export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    FETCH_PRODUCTS__SEARCH = 'FETCH_PRODUCTS_SEARCH'
}

interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS
}

interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS
    payload: {
        products: IProduct[]
        productsCount: number
    }
}

interface FetchProductsErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR
    payload: string
}

interface FetchProductSearchAction {
    type: ProductActionTypes.FETCH_PRODUCTS__SEARCH
    payload: IProduct[]
    value: string
}

export type ProductAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction | FetchProductSearchAction