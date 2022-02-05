import { FC } from 'react';
import FavoritesList from '../components/FavoritesList/FavoritesList';
import FavoritesTitle from '../components/FavoritesTitle/FavoritesTitle';
import { useTypedSelector } from '../hooks/useTypedSelector';

const FavoritesPage: FC = () => {
    const {favorites, loading} = useTypedSelector(state => state.favorites)
    const isFavites = favorites.length

    return (
        <div className="favorites-page container">
            <FavoritesTitle isFavites={isFavites} />
            <FavoritesList loading={loading} products={favorites} />
        </div>
    );
};

export default FavoritesPage;
