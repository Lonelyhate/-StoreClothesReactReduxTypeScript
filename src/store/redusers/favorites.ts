import { FavoriteActionTypes, FavoriteState, FavoriteAction } from "../types/favoritesTypes";

const initalState:FavoriteState = {
    favorites: [],
    loading: false,
    error: null
}

export const favoritesReducer = (state = initalState, action: FavoriteAction):FavoriteState => {
    switch(action.type) {
        case FavoriteActionTypes.FETCH_FAVORITES:
            return {
                ...state,
                favorites: [],
                loading: true,
                error: null
            }
        case FavoriteActionTypes.FETCH_FAVORITES_SUCCESS:
            return {
                ...state,
                favorites: action.payload,
                loading: false,
                error: null
            }
        case FavoriteActionTypes.FETCH_FAVORITES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                favorites: []
            }
        case FavoriteActionTypes.FETCH_FAVORITES_ADD:
            return {
                ...state,
                loading: false,
                error: null,
                favorites: [...state.favorites, action.payload]
            }
        case FavoriteActionTypes.FETCH_FAVORITES_DELETE:
            return {
                ...state,
                loading: false,
                error: null,
                favorites: state.favorites.filter(favorite => favorite.id !== action.payload)
            }
        default:
            return state
    }
}