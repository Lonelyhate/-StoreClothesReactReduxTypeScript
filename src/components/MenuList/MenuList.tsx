import React, { useState } from 'react';
import './MenuList.scss';
import { FaHeart } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import Cart from '../Cart/Cart';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const MenuList = () => {
    const [isShowCart, setIsShowCart] = useState<boolean>(false);
    const { countInCart, totalPrice, loading } = useTypedSelector((state) => state.cart);
    const onClickCart = () => {
        setIsShowCart(!isShowCart);
        document.body.style.overflow = isShowCart ? '' : 'hidden';
    };

    return (
        <ul className="menu-list">
            <li className="menu-list__item">
                <button>
                    <FaHeart />
                    <span>Избранное</span>
                </button>
            </li>
            <li className="menu-list__item">
                <button onClick={onClickCart}>
                    <AiFillShopping />
                    <span>Моя корзина {countInCart > 0 && `($${totalPrice})`}</span>
                    <span className="menu-list__count">
                        {loading ? '' : countInCart}
                    </span>
                </button>
                <Cart onClickShow={onClickCart} isShow={isShowCart} />
            </li>
        </ul>
    );
};

export default MenuList;
