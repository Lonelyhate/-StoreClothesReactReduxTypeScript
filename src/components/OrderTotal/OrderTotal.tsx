import { FC } from 'react';
import './OrderTotal.scss'

interface OrderTotalProps {
    count: number
    price: number
}

const OrderTotal: FC<OrderTotalProps> = ({count, price}) => {
    return (
        <div className="order-total">
            <div className="order-total__content">
                <h3 className="order-total__title">Итого</h3>
                <div className="order-total__middle">
                    <div className="order-total__price">
                        <p>Стоимость товаров: <span>({count})</span></p>
                        <span>${price}</span>
                    </div>
                    <div className="order-total__price">
                        <p>Скидка</p>
                        <span>$0</span>
                    </div>
                    <div className="order-total__price">
                        <p>Доставка</p>
                    </div>
                </div>
                <div className="order-total__bottom">
                    <div className="order-total__total">
                        <p>ИТОГО К ОПЛАТЕ:</p>
                        <span>${price}</span>
                    </div>
                </div>
                <button className="order-total__btn">Оформить заказ</button>
            </div>
        </div>
    );
};

export default OrderTotal;
