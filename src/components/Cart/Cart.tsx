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
    const dispatch = useDispatch()
    const {countInCart, productsInCart, totalPrice} = useTypedSelector(state => state.cart)

    useEffect(() => {
        dispatch(fetchCartProducts())
    }, [])

    return (
        <div
            onClick={onClickShow}
            className={cn('cart', {
                active: isShow,
            })}>
            <div onClick={(e) => e.stopPropagation()} className="cart__content">
                <button onClick={onClickShow} className="cart__close">
                    <AiOutlineClose />
                </button>
                <h3 className='cart__title'> Корзина<span> (Товар: {countInCart})</span></h3>
                <ProductCartList productsCart={productsInCart} />
                <div className="cart__bottom">
                    <div className="cart__total">
                        <span>Итого</span>
                        <span>${totalPrice}</span>
                    </div>
                    <Link to='/cart' ><span onClick={onClickShow} >В корзину</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
