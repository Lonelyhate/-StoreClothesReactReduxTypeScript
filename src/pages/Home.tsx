import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../components/Categories/Categories';
import ProductsList from '../components/ProductsList/ProductsList';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchProducts } from '../store/actions/products';
import { categories, categoriesNamesTypes } from '../types/types';

const categoryNames: categoriesNamesTypes[] = [
    categories.ALL,
    categories.MENS_CLOTHING,
    categories.WOMAN_CLOTHING,
    categories.JEWELERY,
    categories.ELCTRONICS
];

const Home = () => {

    const {products} = useTypedSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="home container">
            <Categories items={categoryNames} />
            <ProductsList products={products} title={categoryNames} />
        </div>
    );
};


export default Home;
