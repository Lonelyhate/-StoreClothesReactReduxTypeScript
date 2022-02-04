import { Dispatch } from "react";
import { categoriesEn } from "../../types/types";
import { CategoriesAction, CategoriesActionTypes } from "../types/categoriesTypes";

export const fetchCategory = (category: categoriesEn) => {
    return (dispatch: Dispatch<CategoriesAction>) => {
        dispatch({
            type: CategoriesActionTypes.FETCH_CATEGORIES,
            payload: category
        })
    }
}