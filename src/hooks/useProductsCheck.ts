import { IProduct } from "../types/types";

export const useCheckProduct = (id:number, items:IProduct[]) => {
    return items.some(item => item.id === id)
}