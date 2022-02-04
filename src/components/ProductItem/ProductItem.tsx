import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchAddToCart, fetchDeleteFromCart } from '../../store/actions/cart';
import { IProduct } from '../../types/types';
import './ProductItem.scss';
import cn from 'classnames';

interface ProductItemProps {
    product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
    const { productsInCart } = useTypedSelector((state) => state.cart);
    const dispatch = useDispatch();
    const isInCart = productsInCart.some((item) => item.id === product.id);

    const handleCart = (product: IProduct, id: number) => {
        !isInCart ? dispatch(fetchAddToCart(product)) : dispatch(fetchDeleteFromCart(id));
        
    };

    return (
        <article className="product">
            <div className="product__img">
                <img src={product.image} alt={product.title} />
            </div>
            <h3 className="product__title">
                {product.title.length >= 27 ? `${product.title.slice(0, 27)} ...` : product.title}
            </h3>
            <div className="product__price">${product.price}</div>
            <button
                onClick={() => {
                    handleCart(product, product.id);
                }}
                className={cn('product__btn', {
                    delete: isInCart,
                })}>
                {isInCart ? 'Убрать из корзины' : 'Добавить в корзину'}
            </button>
        </article>
    );
};

export default ProductItem;
