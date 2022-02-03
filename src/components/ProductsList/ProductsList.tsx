import React, { FC } from 'react';
import { categoriesNamesTypes, IProduct } from '../../types/types';
import ProductItem from '../ProductItem/ProductItem';
import './ProductsList.scss'

interface ProductsListProps {
    title: categoriesNamesTypes[];
    products: IProduct[];
}

const ProductsList: FC<ProductsListProps> = ({ title, products }) => {
    return (
        <div className="products-list">
            <div className="products-list__header">
                <h2 className="products-list__title">{title[0]}</h2>
            </div>
            <div className="products-list__content">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
