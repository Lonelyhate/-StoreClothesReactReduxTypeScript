import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IProduct } from '../../types/types';
import ProductCart from '../ProductCart/ProductCart';
import './ProductCartList.scss'

interface ProductCartListProps {
    productsCart: IProduct[]
}

const ProductCartList: FC<ProductCartListProps> = ({productsCart}) => {

    return <ul className="cart-list">
        {productsCart.map(product => (
            <li key={product.id} className='cart-list__item'>
                <ProductCart product={product} />
            </li>
        ))}
    </ul>;
};

export default ProductCartList
