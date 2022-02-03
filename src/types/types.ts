

export enum categories {
    ALL = 'Все',
    MENS_CLOTHING = 'Мужская одежда',
    WOMAN_CLOTHING = 'Женская одежда',
    JEWELERY = 'Ювелирное изделие',
    ELCTRONICS = 'Электроника'
}

export type categoriesNamesTypes = categories.ALL | categories.MENS_CLOTHING | categories.WOMAN_CLOTHING | categories.JEWELERY | categories.ELCTRONICS

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