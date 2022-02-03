import React, { FC } from 'react';
import { categories } from '../../types/types';
import './Categories.scss'

interface CategoriesProps {
    items: categories[]
}

const Categories:FC<CategoriesProps> = ({items}) => {
  return <ul className='categories'>
      {items.map((item, index) => (
          <li key={item} className='categories__name'>{item}</li>
      ))}
  </ul>;
};

export default Categories;
