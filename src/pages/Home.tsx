import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../components/Categories/Categories';
import ProductsList from '../components/ProductsList/ProductsList';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchCategory } from '../store/actions/categories';
import { fetchProducts } from '../store/actions/products';
import {
    categoriesRus,
    categoriesNamesTypes,
    categoriesEn,
    typeCategoriesEn,
} from '../types/types';

const categoryNames: categoriesNamesTypes[] = [
    { rus: categoriesRus.ALL, en: categoriesEn.ALL },
    { rus: categoriesRus.MENS_CLOTHING, en: categoriesEn.MENS_CLOTHING },
    { rus: categoriesRus.WOMAN_CLOTHING, en: categoriesEn.WOMAN_CLOTHING },
    { rus: categoriesRus.JEWELERY, en: categoriesEn.JEWELERY },
    { rus: categoriesRus.ELCTRONICS, en: categoriesEn.ELCTRONICS },
];

const Home = () => {
    const { products, loading, countProducts } = useTypedSelector((state) => state.products);
    const { categoryName } = useTypedSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(categoryName));
    }, [categoryName]);

    const onSelectCategory = useCallback((category: typeCategoriesEn) => {
        dispatch(fetchCategory(category));
    }, []);


    return (
        <div className="home container">
            <Categories
                onClick={onSelectCategory}
                activeCategory={categoryName}
                items={categoryNames}
            />
            <ProductsList
                loading={loading}
                products={products}
                titleNames={categoryNames}
                activeCategory={categoryName}
                productsCount={countProducts}
            />
        </div>
    );
};

export default Home;
