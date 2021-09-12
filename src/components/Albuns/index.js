import React from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import PaginationSize from '../PaginationSize';
import { useEffect, useState } from 'react';

const AlbunsStyle = styled.div`
  h1 {
    margin: 20px;
  }
  hr {
    margin: 20px 20px 0px 0px;
  }
  div,
  li {
    padding: 10px;
    margin: 10px;
    font-size: 20;
  }
`;

function Albuns() {
  const [albuns, setAlbuns] = useState([]);
  const [filteredAlbuns, setFilteredAlbuns] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageElements, setPageElements] = useState(10);
  const initialElement = currentPage * pageElements;
  const finalElement = initialElement + pageElements;
  const numPages = Math.ceil(filteredAlbuns.length / pageElements);
  const currentAlbuns = filteredAlbuns.slice(initialElement, finalElement);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((resposta) => {
        return resposta.json();
      })
      .then((respostaCompleta) => {
        setAlbuns(respostaCompleta);
        setFilteredAlbuns(respostaCompleta);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [pageElements]);

  const [sorted, setSorted] = useState('');

  function handleListSort(property) {
    const newList = [...filteredAlbuns];

    if (!sorted || sorted !== property) {
      newList.sort((a, b) =>
        a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0
      );
      setSorted(property);
    }

    newList.reverse();
    setFilteredAlbuns(newList);
  }

  function handleSearch(input) {
    const newList = albuns.filter((album) =>
      album.title.toLowerCase().includes(input.toLowerCase())
    );
    setCurrentPage(0);
    setFilteredAlbuns(newList);
  }

  return (
    <AlbunsStyle>
      <h1>Albuns</h1>
      <input
        type="text"
        onChange={(event) => handleSearch(event.target.value)}
      />
      <PaginationSize
        pageElements={pageElements}
        setPageElements={setPageElements}
      />
      <Pagination
        numPages={numPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div>
        Ordenar por: &nbsp;
        <button onClick={() => handleListSort('id')}>ID</button>|
        <button onClick={() => handleListSort('title')}>Título</button>
      </div>

      <ul>
        {currentAlbuns.map((item) => {
          return (
            <>
              <li key={item.id}>
                <h3>{item.title}</h3>
                <hr />
              </li>
            </>
          );
        })}
      </ul>
    </AlbunsStyle>
  );
}

export default Albuns;
