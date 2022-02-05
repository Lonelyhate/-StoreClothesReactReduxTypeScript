import { IProduct } from "../../types/types";

export interface FavoriteState {
    favorites: IProduct[]
    loading: boolean
    error: string | null
}

export enum FavoriteActionTypes {
    FETCH_FAVORITES = 'FETCH_FAVORITES',
    FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS',
    FETCH_FAVORITES_ERROR = 'FETCH_FAVORITES_ERROR',
    FETCH_FAVORITES_ADD = 'FETCH_FAVORITES_ADD',
    FETCH_FAVORITES_DELETE = 'FETCH_FAVORITES_DELETE'
}

interface FetchFavoritesAction {
    type: FavoriteActionTypes.FETCH_FAVORITES
}

interface FetchFavoritesSuccessAction {
    type: FavoriteActionTypes.FETCH_FAVORITES_SUCCESS
    payload: IProduct[]
}

interface FetchFavoritesErrorAction {
    type: FavoriteActionTypes.FETCH_FAVORITES_ERROR
    payload: string
}

interface FetchFavoritesAddAction {
    type: FavoriteActionTypes.FETCH_FAVORITES_ADD,
    payload: IProduct
}

interface FetchFavoritesDeleteAction {
    type: FavoriteActionTypes.FETCH_FAVORITES_DELETE,
    payload: number
}

export type FavoriteAction = FetchFavoritesAction | FetchFavoritesSuccessAction | FetchFavoritesErrorAction | FetchFavoritesDeleteAction | FetchFavoritesAddAction