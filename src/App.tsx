import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import CartPage from './pages/CartPage';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/cart' element={<CartPage/>} />
            </Routes>
        </div>
    );
}

export default App;
