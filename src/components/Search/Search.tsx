import React, { FC, useMemo, useState } from 'react';
import './Search.scss';
import { BiSearch } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import { categoriesEn } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchProducts, fetchProductsSearch } from '../../store/actions/products';
import { useDispatch } from 'react-redux';
import { fetchCategory } from '../../store/actions/categories';

const Search: FC = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        dispatch(fetchProductsSearch(e.target.value));
        dispatch(fetchCategory(categoriesEn.ALL));
    };

    const onClickClear = () => {
        setValue('')
        dispatch(fetchProducts(categoriesEn.ALL))
    }

    return (
        <div className="search">
            <input
                value={value}
                onChange={(e) => onChange(e)}
                type="text"
                placeholder="Поиск по товару"
                className="search__input"
            />
            {!value ? (
                <button disabled className="search__btn">
                    <BiSearch />
                </button>
            ) : (
                <button className="search__btn">
                    <ImCross onClick={onClickClear} style={{ width: 15, cursor: 'pointer' }} />
                </button>
            )}
        </div>
    );
};

export default Search;
