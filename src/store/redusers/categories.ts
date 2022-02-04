import { categoriesEn } from "../../types/types";
import { CategoriesAction, CategoriesActionTypes, CategoriesState } from "../types/categoriesTypes";

const initialState: CategoriesState = {
    categoryName: categoriesEn.ALL
}

export const categoriesReducer = (state = initialState, action: CategoriesAction): CategoriesState => {
    switch(action.type) {
        case CategoriesActionTypes.FETCH_CATEGORIES:
            return {
                ...state,
                categoryName: action.payload
            }
        default:
            return state
    }
}