import axios from "axios"
import { Dispatch } from "react"
import { IProduct } from "../../types/types"
import { FavoriteAction, FavoriteActionTypes } from "../types/favoritesTypes"

export const fetchFavorites = () => {
    return async (dispatch: Dispatch<FavoriteAction>) => {
        try {
            dispatch({type: FavoriteActionTypes.FETCH_FAVORITES})
            const response = await axios.get('/favorites')
            dispatch({
                type: FavoriteActionTypes.FETCH_FAVORITES_SUCCESS,
                payload: response.data
            })
        } catch(e) {
            dispatch({
                type: FavoriteActionTypes.FETCH_FAVORITES_ERROR,
                payload: 'Произошла ошибка при загрузке избранных'
            })
        }
    }
}

export const fetchAddToFavorites = (favorite: IProduct) => {
    return async (dispatch: Dispatch<FavoriteAction>) => {
        try {
            await axios.post('/favorites', favorite)

            dispatch({
                type: FavoriteActionTypes.FETCH_FAVORITES_ADD,
                payload: favorite
            })
        } catch(e) {
            dispatch({
                type: FavoriteActionTypes.FETCH_FAVORITES_ERROR,
                payload: 'Произошла ошибка при добавление в избранные'
            })
        }
    }
}

export const fetchDeleteFromFavorites = (id: number) => {
    return async (dispatch: Dispatch<FavoriteAction>) => {
        try {
            dispatch({
                type: FavoriteActionTypes.FETCH_FAVORITES_DELETE,
                payload: id
            })

            await axios.delete(`/favorites/${id}`)
        } catch(e) {
            dispatch({
                type: FavoriteActionTypes.FETCH_FAVORITES_ERROR,
                payload: 'Произошла ошибка при удаление'
            })
        }
    }
}