import React from 'react';
import './MenuList.scss';
import { FaHeart } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';

const MenuList = () => {
    return (
        <ul className="menu-list">
            <li className="menu-list__item">
                <button>
                    <FaHeart />
                    <span>Избранное</span>
                </button>
            </li>
            <li className="menu-list__item">
                <button>
                    <AiFillShopping/>
                    <span>Моя корзина</span>
                    <span className='menu-list__count'>0</span>
                </button>
            </li>
        </ul>
    );
};

export default MenuList;
