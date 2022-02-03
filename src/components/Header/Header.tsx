import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import MenuList from '../MenuList/MenuList';
import Search from '../Search/Search';
import './Header.scss';

const Header: FC = () => {
    return (
        <header className="header">
            <div className='header__container container'>
                <Logo
                    name="Store"
                    description="барахолка всего"
                    fontSizeName={36}
                    fontSizeDescr={15}
                />
                <Search />
                <MenuList />
            </div>
        </header>
    );
};

export default Header;
