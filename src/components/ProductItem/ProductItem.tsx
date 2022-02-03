import { FC } from 'react';
import { IProduct } from '../../types/types';
import './ProductItem.scss';

interface ProductItemProps {
    product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
    return (
        <article className="product">
            <div className="product__img">
                <img src={product.image} alt={product.title} />
            </div>
            <h3 className="product__title">
                {product.title.length >= 27 ? `${product.title.slice(0, 27)} ...` : product.title}
            </h3>
            <div className="product__price">${product.price}</div>
            <button className="product__btn">Добавить в корзину</button>
        </article>
    );
};

export default ProductItem;
