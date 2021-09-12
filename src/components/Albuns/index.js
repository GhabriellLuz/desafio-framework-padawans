import React from 'react';
import Search from '../Search';
import Pagination from '../Pagination';
import PaginationSize from '../PaginationSize';
import { useEffect, useState } from 'react';
import Sort from '../Sort';
import ItemsStyle from '../ItemsStyle';
import FiltrosWrapper from '../FiltrosWrapper';
import Back from '../../images/back.png';
import { Link } from 'react-router-dom';

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

  return (
    <ItemsStyle>
      <FiltrosWrapper>
        <h1>Albuns</h1>
        <Link to="/">
          <img src={Back} width="25px" height="25px" alt="back" />
        </Link>
      </FiltrosWrapper>
      <FiltrosWrapper>
        <Sort
          properties={['id', 'title']}
          showedProperties={['ID', 'Título']}
          filteredItems={filteredAlbuns}
          setFilteredItems={setFilteredAlbuns}
        />
        <Search
          items={albuns}
          setCurrentPage={setCurrentPage}
          setFilteredItems={setFilteredAlbuns}
        />
      </FiltrosWrapper>

      <FiltrosWrapper>
        <PaginationSize
          pageElements={pageElements}
          setPageElements={setPageElements}
        />
        <Pagination
          numPages={numPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </FiltrosWrapper>

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
    </ItemsStyle>
  );
}

export default Albuns;
