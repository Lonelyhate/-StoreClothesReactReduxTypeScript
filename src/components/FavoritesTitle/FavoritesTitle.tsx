import { FC } from 'react';
import './FavoritesTitle.scss';
import { IoMdHeart } from 'react-icons/io';

interface FavoritesTitleProps {
    isFavites: number;
}

const FavoritesTitle: FC<FavoritesTitleProps> = ({ isFavites }) => {
    return (
        <div className="favorites-title">
            <div className="favorites-title__content">
                <h2 className="favorites-title__name">
                    {isFavites ? 'Избранные товары' : 'Ваш список пуст'} <IoMdHeart />{' '}
                </h2>
            </div>
            <p className="favorites-title__text">
                {!isFavites ? (
                    <span className="favorites-title__un">В Вашем списке ничего нет…</span>
                ) : (
                    <span className="favorites-title__done">Недавно добавленные товары</span>
                )}
            </p>
        </div>
    );
};

export default FavoritesTitle;
