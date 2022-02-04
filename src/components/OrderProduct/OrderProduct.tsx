import { FC } from 'react';
import { IProduct } from '../../types/types';
import { GrClose } from 'react-icons/gr';
import './OrderProduct.scss'

interface OrderProductProps {
    product: IProduct;
    clickDeleteProduct: (id:number) => void
}

const OrderProduct: FC<OrderProductProps> = ({ product, clickDeleteProduct }) => {
    return (
        <article className="order-product">
            <div className="order-product__img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="order-product__text">
                <h3 className="order-product__title">{product.title}</h3>
                <div className="order-product__price">${product.price}</div>
            </div>
            <button onClick={(e) => clickDeleteProduct(product.id)} className="order-product__btn">
                    <GrClose />
            </button>
        </article>
    );
};

export default OrderProduct;
