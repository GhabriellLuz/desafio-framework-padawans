import React from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import PaginationSize from '../PaginationSize';
import { useEffect, useState } from 'react';

const PostagensStyle = styled.div`
  h1 {
    margin: 20px;
  }
  h3 {
    margin: 5px 2px;
  }
  hr {
    margin: 20px 20px 0px 0px;
  }
  li,
  div {
    padding: 10px;
    margin: 10px;
    font-size: 20;
  }
`;

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

  const [sorted, setSorted] = useState('');

  function handleListSort(property) {
    const newList = [...filteredPosts];

    if (!sorted || sorted !== property) {
      newList.sort((a, b) =>
        a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0
      );
      setSorted(property);
    }

    newList.reverse();
    setFilteredPosts(newList);
  }

  function handleSearch(input) {
    const newList = posts.filter((post) =>
      post.title.toLowerCase().includes(input.toLowerCase())
    );
    setCurrentPage(0);
    setFilteredPosts(newList);
  }

  return (
    <PostagensStyle>
      <h1>Postagens</h1>
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
    </PostagensStyle>
  );
}

export default Postagens;
