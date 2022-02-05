import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchAddToCart, fetchDeleteFromCart } from '../../store/actions/cart';
import { IProduct, pages, typePages } from '../../types/types';
import './ProductItem.scss';
import cn from 'classnames';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import { BsFillTrashFill } from 'react-icons/bs';
import { fetchAddToFavorites, fetchDeleteFromFavorites } from '../../store/actions/favorites';
import { useNavigate } from 'react-router-dom';
import { getCurrentProduct, postCurrentProduct } from '../../store/actions/products';
import { useCheckProduct } from '../../hooks/useProductsCheck';

interface ProductItemProps {
    product: IProduct;
    page: typePages;
}

const ProductItem: FC<ProductItemProps> = ({ product, page }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate()
    const onClickPages = () => {
        navigate(`/${product.title}`)
        dispatch(postCurrentProduct(product))
    }

    const { productsInCart } = useTypedSelector((state) => state.cart);
    const isInCart = useCheckProduct(product.id, productsInCart)

    const { favorites } = useTypedSelector((state) => state.favorites);
    const isInFavorites = useCheckProduct(product.id, favorites)

    const handleCart = (product: IProduct, id: number) => {
        !isInCart ? dispatch(fetchAddToCart(product)) : dispatch(fetchDeleteFromCart(id));
    };

    const handleFavorites = (e: React.MouseEvent<HTMLButtonElement>, product: IProduct, id: number) => {
        e.stopPropagation()
        !isInFavorites
            ? dispatch(fetchAddToFavorites(product))
            : dispatch(fetchDeleteFromFavorites(id));
    };

    return (
        <article className="product">
            <div onClick={onClickPages} className="product__img">
                {page === pages.HOME && (
                    <button onClick={(e) => handleFavorites(e, product, product.id)}>
                        {isInFavorites ? (
                            <IoMdHeart style={{ width: '29px', height: '29px', marginTop: -2 }} />
                        ) : (
                            <FaRegHeart style={{ width: '25px', height: '25px' }} />
                        )}
                    </button>
                )}
                <img src={product.image} alt={product.title} />
            </div>
            <h3 onClick={onClickPages} className="product__title">
                {product.title.length >= 27 ? `${product.title.slice(0, 27)} ...` : product.title}
            </h3>
            <div className="product__price">${product.price}</div>
            <div className="product__bottom">
                <button
                    onClick={() => {
                        handleCart(product, product.id);
                    }}
                    className={cn('product__btn', {
                        delete: isInCart,
                    })}>
                    {isInCart ? 'Убрать из корзины' : 'Добавить в корзину'}
                </button>
                {page === pages.FAVORITES && (
                    <button className='product__favorite' onClick={(e) => handleFavorites(e, product, product.id)}>
                        <BsFillTrashFill style={{width: '20px', height: '20px'}} />
                    </button>
                )}
            </div>
        </article>
    );
};

export default ProductItem;
