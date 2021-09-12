import { useState } from 'react';
import styled from 'styled-components';

const SortWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    border: 1px solid #dee2e6;
    padding: 0.5rem;
    background-color: #fff;
    color: #1793a6;
  }

  button:hover {
    background-color: #e9ecef;
  }

  button.active {
    color: #fff;
    background-color: #1793a6;
    border-color: #007bff;
  }

  .sortby {
    font-size: 1.5em;
  }
`;

const Sort = ({
  properties,
  showedProperties,
  filteredItems,
  setFilteredItems,
}) => {
  const [sorted, setSorted] = useState('');
  const [ascDesc, setAscDesc] = useState('⬇');

  const ascDescToggle = () => {
    ascDesc === '⬆' ? setAscDesc('⬇') : setAscDesc('⬆');
  };

  const handleListSort = (property) => {
    const newList = [...filteredItems];

    if (!sorted || sorted !== property) {
      newList.sort((a, b) =>
        a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0
      );
      setSorted(property);
    }

    newList.reverse();
    ascDescToggle();

    setFilteredItems(newList);
  };

  return (
    <SortWrapper>
      Ordenar por: &nbsp;
      {properties.map((property, index) => {
        return (
          <button key={property} onClick={() => handleListSort(property)}>
            {showedProperties[index]}
          </button>
        );
      })}
      <p className="sortby">&nbsp;{ascDesc}</p>
    </SortWrapper>
  );
};

export default Sort;
