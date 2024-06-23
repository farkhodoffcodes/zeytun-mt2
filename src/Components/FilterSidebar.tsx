import React from 'react';
import styled from 'styled-components';
import FilterItem from './FilterItem';
import PriceRange from './PriceRange';

const Sidebar = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-right: 1px solid #ddd;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FilterSidebar: React.FC = () => {
  return (
    <Sidebar>
      <Title>Мужчинам</Title>
      <FilterItem title="Категории" items={['Рубашки', 'Футболки', 'Пальто', 'Свитеры', 'Толстовки', 'Жилеты', 'Майки', 'Пиджаки', 'Пуховики']} />
      <FilterItem title="Бренды" items={['Adidas', 'Puma', 'Nike', 'LC Waikiki', 'KOTON']} type="checkbox" />
      <FilterItem title="Размер" items={['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '52', '48', '50']} type="button" />
      <PriceRange />
      <FilterItem title="Стиль" items={['Деловой', 'Повседневный', 'Спортивный', 'Кэжуал']} type="radio" />
      <FilterItem title="Цвет" items={['Черный', 'Белый', 'Серый', 'Красный', 'Синий']} type="radio" />
    </Sidebar>
  );
};

export default FilterSidebar;
