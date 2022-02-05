import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import { fetchCartProducts } from './store/actions/cart';
import { fetchFavorites } from './store/actions/favorites';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartProducts());
        dispatch(fetchFavorites())
        
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path='/favorites' element={<FavoritesPage/>} />
                <Route path='/:title' element={<ProductPage/>} />
            </Routes>
        </div>
    );
}

export default App;
