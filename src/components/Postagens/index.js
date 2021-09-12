import React from 'react';
import Sort from '../Sort';
import Search from '../Search';
import ItemsStyle from '../ItemsStyle';
import Pagination from '../Pagination';
import PaginationSize from '../PaginationSize';
import FiltrosWrapper from '../FiltrosWrapper';
import { useEffect, useState } from 'react';
import Back from '../../images/back.png';
import { Link } from 'react-router-dom';

function Postagens() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageElements, setPageElements] = useState(10);
  const initialElement = currentPage * pageElements;
  const finalElement = initialElement + pageElements;
  const numPages = Math.ceil(filteredPosts.length / pageElements);
  const currentPosts = filteredPosts.slice(initialElement, finalElement);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resposta) => {
        return resposta.json();
      })
      .then((respostaCompleta) => {
        setPosts(respostaCompleta);
        setFilteredPosts(respostaCompleta);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [pageElements]);

  return (
    <ItemsStyle>
      <FiltrosWrapper>
        <h1>Postagens</h1>
        <Link to="/">
          <img src={Back} width="25px" height="25px" alt="back" />
        </Link>
      </FiltrosWrapper>
      <FiltrosWrapper>
        <Sort
          properties={['id', 'title']}
          showedProperties={['ID', 'Título']}
          filteredItems={filteredPosts}
          setFilteredItems={setFilteredPosts}
        />
        <Search
          items={posts}
          setCurrentPage={setCurrentPage}
          setFilteredItems={setFilteredPosts}
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
        {currentPosts.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.id}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    </ItemsStyle>
  );
}

export default Postagens;
