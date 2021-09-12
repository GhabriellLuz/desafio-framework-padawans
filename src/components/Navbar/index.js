import { Link } from 'react-router-dom';
import styled from 'styled-components';
import frameworklogo from '../../images/framework-logo.png';

const NavbarStyle = styled.div`
  nav {
    background-color: #1793a6;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
  }

  a {
    display: flex;
    font-weight: bold;
    text-decoration: none;
    padding: 20px 25px;
    height: 100%;
    align-items: center;
    flex-direction: row;
    color: #f1faee;
  }

  a:hover img {
    filter: invert(70%);
  }

  a:hover {
    background-color: #fff;
    box-shadow: 0 12px 12px rgb(0 0 0 / 16%);
    color: #404040;
  }
`;

export function Navbar(props) {
  return (
    <NavbarStyle>
      <nav>
        <Link to="/">
          <img src={frameworklogo} alt="back-logo" />
        </Link>
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
