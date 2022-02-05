

export enum categoriesRus {
    ALL = 'Все',
    MENS_CLOTHING = 'Мужская одежда',
    WOMAN_CLOTHING = 'Женская одежда',
    JEWELERY = 'Ювелирное изделие',
    ELCTRONICS = 'Электроника'
}

export enum categoriesEn {
    ALL = 'All',
    MENS_CLOTHING = "men's clothing",
    WOMAN_CLOTHING = "women's clothing",
    JEWELERY = 'jewelery',
    ELCTRONICS = 'electronics'
}

export enum pages {
    HOME = 'HOME',
    FAVORITES = 'FAVORITES'
}

export type typePages = pages.HOME | pages.FAVORITES

export type typeCategoriesEn = categoriesEn.ALL | categoriesEn.MENS_CLOTHING | categoriesEn.WOMAN_CLOTHING | categoriesEn.JEWELERY | categoriesEn.ELCTRONICS
export type typeCategoriesRus = categoriesRus.ALL | categoriesRus.MENS_CLOTHING | categoriesRus.WOMAN_CLOTHING | categoriesRus.JEWELERY | categoriesRus.ELCTRONICS

export interface categoriesNamesTypes {
    rus: typeCategoriesRus
    en: typeCategoriesEn
}

export type rating = {
    rate: number,
    count: number
}

export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: rating
}