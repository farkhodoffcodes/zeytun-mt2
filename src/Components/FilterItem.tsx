import React from 'react';
import styled from 'styled-components';

interface FilterItemProps {
  title: string;
  items: string[];
  type?: 'checkbox' | 'radio' | 'button';
}

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FilterListItem = styled.li`
  margin-bottom: 5px;
`;

const FilterButton = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? '#ffcc00' : '#fff')};
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ffcc00;
  }
`;

const FilterItem: React.FC<FilterItemProps> = ({ title, items, type = 'checkbox' }) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleSelect = (item: string) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

  return (
    <FilterContainer>
      <FilterTitle>{title}</FilterTitle>
      <FilterList>
        {items.map((item, index) => (
          <FilterListItem key={index}>
            {type === 'button' ? (
              <FilterButton
                selected={selectedItems.includes(item)}
                onClick={() => handleSelect(item)}
              >
                {item}
              </FilterButton>
            ) : (
              <label>
                <input type={type} name={title} /> {item}
              </label>
            )}
          </FilterListItem>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default FilterItem;
