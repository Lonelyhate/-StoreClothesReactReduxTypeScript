import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDeleteFromCart } from '../../store/actions/cart';
import { IProduct } from '../../types/types';
import OrderProduct from '../OrderProduct/OrderProduct';
import './OrderList.scss';

interface OrderListProps {
    products: IProduct[];
    countInCart: number;
}

const OrderList: FC<OrderListProps> = ({ products, countInCart }) => {
    const dispatch = useDispatch();
    const deleteProduct = (id: number) => {
        dispatch(fetchDeleteFromCart(id));
    };

    return (
        <div className="order-list">
            {products.length ? (
                <div className="order-list__block">
                    <h2 className="order-list__title">
                        Корзина <span>(товаров: {countInCart})</span>
                    </h2>
                    <ul className="order-list__content">
                        {products.map((product) => (
                            <li key={product.id} className="order-list__item">
                                <OrderProduct
                                    clickDeleteProduct={deleteProduct}
                                    product={product}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='order-list__empty'>
                    <p>В Вашей корзине пока ничего нет.</p>
                    <Link to='/' >Перейти к покупкам</Link>
                </div>
            )}
        </div>
    );
};

export default OrderList;
