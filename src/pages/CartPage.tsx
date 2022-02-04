import { FC } from 'react';
import { useDispatch } from 'react-redux';
import OrderList from '../components/OrderList/OrderList';
import OrderTotal from '../components/OrderTotal/OrderTotal';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './Pages.scss'

const CartPage: FC = () => {
    const { countInCart, totalPrice, productsInCart } = useTypedSelector((state) => state.cart);

    return (
        <div className="cart-page">
            <OrderList countInCart={countInCart} products={productsInCart} />
            <OrderTotal count={countInCart} price={totalPrice} />
        </div>
    );
};

export default CartPage;
