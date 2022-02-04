import React, { FC } from 'react';
import { categoriesNamesTypes, IProduct, typeCategoriesEn } from '../../types/types';
import ProductItem from '../ProductItem/ProductItem';
import ProductItemSkeleton from '../ReactSkeletonItems/ProductItem';
import './ProductsList.scss';

interface ProductsListProps {
    titleNames: categoriesNamesTypes[];
    products: IProduct[];
    loading: boolean;
    activeCategory: typeCategoriesEn;
    productsCount: number;
}

const ProductsList: FC<ProductsListProps> = ({
    titleNames,
    products,
    loading,
    activeCategory,
    productsCount,
}) => {
    const title = titleNames.filter((name) => name.en == activeCategory);

    return (
        <div className="products-list">
            <div className="products-list__header">
                <h2 className="products-list__title">
                    {title[0].rus} <span>({productsCount} товаров)</span>
                </h2>
            </div>
            <div className="products-list__content">
                {!loading
                    ? products.map((product) => <ProductItem key={product.id} product={product} />)
                    : [...Array(8)].map((item, index) => <ProductItemSkeleton key={index} />)}
            </div>
        </div>
    );
};

export default ProductsList;
