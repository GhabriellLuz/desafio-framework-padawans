import React from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import PaginationSize from '../PaginationSize';
import { useEffect, useState } from 'react';

const TodosStyle = styled.div`
  input {
    margin: 3px;
  }

  div,
  li {
    padding: 10px;
    margin: 10px;
    font-size: 20;
    display: flex;
  }
  h1 {
    margin: 20px;
  }
  hr {
    margin: 20px 20px 10px 10px;
  }
`;

function Todos() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageElements, setPageElements] = useState(10);
  const initialElement = currentPage * pageElements;
  const finalElement = initialElement + pageElements;
  const numPages = Math.ceil(filteredTodos.length / pageElements);
  const currentTodos = filteredTodos.slice(initialElement, finalElement);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((resposta) => {
        return resposta.json();
      })
      .then((respostaCompleta) => {
        setTodos(respostaCompleta);
        setFilteredTodos(respostaCompleta);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [pageElements]);

  const [sorted, setSorted] = useState('');

  function handleListSort(property) {
    const newList = [...filteredTodos];

    if (!sorted || sorted !== property) {
      newList.sort((a, b) =>
        a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0
      );
      setSorted(property);
    }

    newList.reverse();
    setFilteredTodos(newList);
  }

  function handleSearch(input) {
    const newList = todos.filter((post) =>
      post.title.toLowerCase().includes(input.toLowerCase())
    );
    setCurrentPage(0);
    setFilteredTodos(newList);
  }

  function handleSelectComplete(checked) {
    if (checked) {
      const newList = todos.filter((todo) => todo.completed);
      setFilteredTodos(newList);
    } else {
      setFilteredTodos(todos);
    }
    setCurrentPage(0);
  }

  return (
    <TodosStyle>
      <h1>TO-DOs</h1>
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
        <button onClick={() => handleListSort('title')}>Título</button>|
        <button onClick={() => handleListSort('completed')}>Completo</button>
      </div>
      <div>
        <input
          type="checkbox"
          id="filtro"
          onChange={(event) => handleSelectComplete(event.target.checked)}
        />
        <label htmlFor="filtro">Exibir apenas tarefas completas</label>
      </div>

      <ul>
        {currentTodos.map((item) => {
          return (
            <>
              <li key={item.id}>
                {item.id} |
                <input type="checkbox" defaultChecked={item.completed} />
                <p>{item.title}</p>
              </li>
              <hr />
            </>
          );
        })}
      </ul>
    </TodosStyle>
  );
}

export default Todos;
