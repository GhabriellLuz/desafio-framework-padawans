import React from 'react';
import Sort from '../Sort';
import Search from '../Search';
import Pagination from '../Pagination';
import PaginationSize from '../PaginationSize';
import { useEffect, useState } from 'react';
import ItemsStyle from '../ItemsStyle';
import FiltrosWrapper from '../FiltrosWrapper';
import Back from '../../images/back.png';
import { Link } from 'react-router-dom';

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
    <ItemsStyle>
      <FiltrosWrapper>
        <h1>TO-DOs</h1>
        <Link to="/">
          <img src={Back} width="25px" height="25px" alt="back" />
        </Link>
      </FiltrosWrapper>
      <FiltrosWrapper>
        <Sort
          properties={['id', 'title', 'completed']}
          showedProperties={['ID', 'Título', 'Completo']}
          filteredItems={filteredTodos}
          setFilteredItems={setFilteredTodos}
        />
        <Search
          items={todos}
          setCurrentPage={setCurrentPage}
          setFilteredItems={setFilteredTodos}
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
      <FiltrosWrapper>
        <div>
          <input
            type="checkbox"
            id="filtro"
            onChange={(event) => handleSelectComplete(event.target.checked)}
          />
          &nbsp;
          <label htmlFor="filtro">Exibir apenas tarefas completas</label>
        </div>
      </FiltrosWrapper>

      <ul className="todoscontainer">
        {currentTodos.map((item) => {
          return (
            <>
              <li key={item.id} className="todositems">
                {item.id} |
                <input
                  id={item.id}
                  type="checkbox"
                  defaultChecked={item.completed}
                />
                <label htmlFor={item.id}>{item.title}</label>
              </li>
              <hr style={{ margin: '15px' }} />
            </>
          );
        })}
      </ul>
    </ItemsStyle>
  );
}

export default Todos;
