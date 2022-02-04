import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { categoriesReducer } from "./categories";
import { productsReducer } from "./products";

export const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>