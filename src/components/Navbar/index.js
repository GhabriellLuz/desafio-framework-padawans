import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyle = styled.div`
  background-color: #1d3557;
  margin-bottom: 20px;

  ul {
    display: flex;
    height: 60px;
    justify-content: flex-end;
  }

  li a {
    display: block;
    text-decoration: none;
    color: #f1faee;
    height: 100%;
    padding: 20px;
    align-items: center;
    height: 100%;
    flex-direction: row;
  }

  li:hover {
    background-color: #457b9d;
  }
`;

export function Navbar(props) {
  return (
    <NavbarStyle>
      <nav>
        <ul>
          <li>
            <Link to="/postagens">Postagens</Link>
          </li>
          <li>
            <Link to="/albuns">Albuns</Link>
          </li>
          <li>
            <Link to="/to-dos">To-dos</Link>
          </li>
        </ul>
      </nav>
    </NavbarStyle>
  );
}
