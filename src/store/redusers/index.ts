import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { categoriesReducer } from "./categories";
import { favoritesReducer } from "./favorites";
import { productsReducer } from "./products";

export const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    favorites: favoritesReducer
})

export type RootState = ReturnType<typeof rootReducer>