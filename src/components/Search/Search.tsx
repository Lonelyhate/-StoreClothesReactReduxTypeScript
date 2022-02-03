import React from 'react';
import './Search.scss';
import {BiSearch} from 'react-icons/bi'

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder='Поиск по товару' className='search__input'/>
            <button className='search__btn'><BiSearch /></button>
        </div>
    );
};

export default Search;
