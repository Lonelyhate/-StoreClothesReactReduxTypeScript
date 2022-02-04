import { combineReducers } from "redux";
import { categoriesReducer } from "./categories";
import { productsReducer } from "./products";

export const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer
})

export type RootState = ReturnType<typeof rootReducer>