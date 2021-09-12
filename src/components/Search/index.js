import styled from 'styled-components';

const SearchWrapper = styled.div`
  input {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 6px 12px;
    font-size: inherit;
    height: 2.2em;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  input:focus {
    background-color: #fff;
    border-color: #a8dadc;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`;

const Search = ({ items, setCurrentPage, setFilteredItems }) => {
  const handleSearch = (input) => {
    const newList = items.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setCurrentPage(0);
    setFilteredItems(newList);
  };

  return (
    <SearchWrapper>
      <div>
        <input
          type="text"
          onChange={(event) => handleSearch(event.target.value)}
          placeholder="Pesquisar"
        />
      </div>
    </SearchWrapper>
  );
};

export default Search;
