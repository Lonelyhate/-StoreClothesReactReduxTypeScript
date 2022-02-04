import React, { FC } from 'react';
import { categoriesEn, categoriesNamesTypes, typeCategoriesEn } from '../../types/types';
import './Categories.scss';
import cn from 'classnames';

interface CategoriesProps {
    items: categoriesNamesTypes[];
    activeCategory: categoriesEn;
    onClick: (category: typeCategoriesEn) => void;
}

const Categories: FC<CategoriesProps> = React.memo(({ items, activeCategory, onClick }) => {
    return (
        <ul className="categories">
            {items.map((item) => (
                <li
                    key={item.en}
                    onClick={() => onClick(item.en)}
                    className={cn('categories__name', {
                        active: item.en === activeCategory,
                    })}>
                    {item.rus}
                </li>
            ))}
        </ul>
    );
});

export default Categories;
