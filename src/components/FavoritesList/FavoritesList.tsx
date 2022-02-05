import { FC } from 'react';
import { IProduct, pages } from '../../types/types';
import ProductItem from '../ProductItem/ProductItem';
import ProductItemSkeleton from '../ReactSkeletonItems/ProductItemSkeleton';
import './FavoritesList.scss';

interface FavoritesListProps {
    products: IProduct[];
    loading: boolean;
}

const FavoritesList: FC<FavoritesListProps> = ({ products, loading }) => {
    return (
        <ul className="favorites-list">
            {loading
                ? [...Array(8)].map((item, index) => <ProductItemSkeleton key={index} />)
                : products.map((product) => (
                      <li key={product.id} className="favorites-list__item">
                          <ProductItem page={pages.FAVORITES} product={product} />
                      </li>
                  ))}
        </ul>
    );
};

export default FavoritesList;
