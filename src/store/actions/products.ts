import axios from "axios"
import { Dispatch } from "react"
import { categoriesEn, IProduct, typeCategoriesEn } from "../../types/types"
import { ProductAction, ProductActionTypes } from "../types/productsTypes"

export const fetchProducts = (category: typeCategoriesEn) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try{
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            const response = await axios.get(`http://localhost:3001/products?${category === categoriesEn.ALL ? '' : `category=${category}`}`)
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
                payload: {
                    products: response.data,
                    productsCount: response.data.length
                }  
            })
        }catch(e) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Ошибка загузки товаров'
            })
        }
    }
} 

export const fetchProductsSearch = (value: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/products')
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS__SEARCH,
                payload: response.data,
                value: value
            })
            
        } catch(e) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Ошибка загузки товаров'
            })
        }
    }
}