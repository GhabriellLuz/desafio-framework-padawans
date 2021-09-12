import styled from 'styled-components';

const ItemsStyle = styled.div`
  h3 {
    margin: 5px 2px;
  }
  hr {
    margin: 20px 20px 0px 0px;
  }
  li {
    padding: 10px;
    margin: 10px;
  }

  .todositems > input[type='checkbox'] {
    margin: 5px;
    height: 1.4em;
    width: 1.4em;
  }

  .todositems > :checked + label {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
  }

  .todositems {
    display: flex;
    align-items: center;
  }
`;

export default ItemsStyle;
