import { FC } from 'react';
import { IProduct } from '../../types/types';
import { GrClose } from 'react-icons/gr';
import './ProductCart.scss';
import { useDispatch } from 'react-redux';
import { fetchDeleteFromCart } from '../../store/actions/cart';

interface ProductCartProps {
    product: IProduct;
}

const ProductCart: FC<ProductCartProps> = ({ product }) => {

    const dispatch = useDispatch()

    const deletFromCart = () => {
        dispatch(fetchDeleteFromCart(product.id))
    }

    return (
        <article className="product-cart">
            <div className="product-cart__img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-cart__text">
                <h3 className="product-cart__title">{product.title}</h3>
                <div className="product-cart__price">${product.price}</div>
            </div>
            <button onClick={deletFromCart} className="product-cart__btn">
                <GrClose style={{height: '30px'}} />
            </button>
        </article>
    );
};

export default ProductCart;
