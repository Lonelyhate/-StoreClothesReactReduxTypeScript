import { typeCategoriesEn } from "../../types/types";


export interface CategoriesState {
    categoryName: typeCategoriesEn
}

export enum CategoriesActionTypes {
    FETCH_CATEGORIES = 'FETCH_CATEGORY'
}

interface FetchCategoriesAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES
    payload: typeCategoriesEn
}

export type CategoriesAction = FetchCategoriesAction