import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getCurrentProduct } from '../../store/actions/products';
import './ProductPage.scss';
import cn from 'classnames';
import { fetchAddToCart, fetchDeleteFromCart } from '../../store/actions/cart';
import ProductPageSkeleton from '../../components/ReactSkeletonItems/ProductPageSkeleton';


const ProductPage = () => {
    const { currentProduct, loading } = useTypedSelector((state) => state.products);
    const { productsInCart } = useTypedSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentProduct());
    }, []);

    let isInCart = currentProduct
        ? productsInCart.some((product) => product.id === currentProduct.id)
        : false;

    let onClickToCart = () => console.log(1);

    if (currentProduct) {
        onClickToCart = () => {
            isInCart
                ? dispatch(fetchDeleteFromCart(currentProduct.id))
                : dispatch(fetchAddToCart(currentProduct));
        };
    }

    return (
        <div className="product-page container">
            {loading ? (
                <ProductPageSkeleton/>
            ) : (
                <div className="product-page__content">
                    <div className="product-page__img">
                        <img src={currentProduct?.image} alt={currentProduct?.title} />
                    </div>
                    <div className="product-page__right">
                        <h3 className="product-page__name">{currentProduct?.title}</h3>
                        <div className="product-page__price">
                            ${currentProduct?.price.toFixed(2)}
                        </div>
                        <div className="product-page__rating">
                            <strong>Рейтинг</strong>: {currentProduct?.rating.rate}/5{' '}
                            <span>({currentProduct?.rating.count} отзывов)</span>
                        </div>
                        <div className="product-page__bottom">
                            <h4 className="product-page__descr-title">Описание</h4>
                            <p className="product-page__descr">{currentProduct?.description}</p>
                        </div>
                        <button
                            onClick={() => {
                                onClickToCart();
                            }}
                            className={cn('product-page__btn', {
                                delete: isInCart,
                            })}>
                            {!isInCart ? 'Добавить в корзину' : 'Удалить из корзины'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
