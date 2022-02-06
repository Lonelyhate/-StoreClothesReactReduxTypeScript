import { FC, useEffect } from 'react';
import './Cart.scss';
import { AiOutlineClose } from 'react-icons/ai';
import cn from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchCartProducts } from '../../store/actions/cart';
import ProductCartList from '../ProductCartList/ProductCartList';
import { Link } from 'react-router-dom';

interface cartProps {
    isShow: boolean;
    onClickShow: () => void;
}

const Cart: FC<cartProps> = ({ isShow, onClickShow }) => {
    const { countInCart, productsInCart, totalPrice } = useTypedSelector((state) => state.cart);

    return (
        <div
            onClick={onClickShow}
            className={cn('cart', {
                active: isShow,
            })}>
            {productsInCart.length ? (
                <div onClick={(e) => e.stopPropagation()} className="cart__content">
                    <button onClick={onClickShow} className="cart__close">
                        <AiOutlineClose />
                    </button>
                    <h3 className="cart__title">
                        {' '}
                        Корзина<span> (Товар: {countInCart})</span>
                    </h3>
                    <ProductCartList productsCart={productsInCart} />
                    <div className="cart__bottom">
                        <div className="cart__total">
                            <span>Итого</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <span onClick={onClickShow}>
                            <Link to="/cart">В корзину</Link>
                        </span>
                    </div>
                </div>
            ) : (
                <div onClick={(e) => e.stopPropagation()} className="cart__empty">
                    <button
                        onClick={onClickShow}
                        style={{ width: '30px', height: '30px' }}
                        className="cart__close">
                        <AiOutlineClose />
                    </button>
                    <h4>В вашей корзине пока ничего нет</h4>
                    <p>Выберите товар, чтобы начать шопинг</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
