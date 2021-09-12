import styled from 'styled-components';

const PaginationWrapper = styled.div`
  button {
    border: 1px solid #dee2e6;
    padding: 0.5rem 0.75rem;
    background-color: #fff;
    color: #1793a6;
  }

  button:hover {
    background-color: #e9ecef;
  }

  button.active {
    color: #fff;
    background-color: #1793a6;
    border-color: #007bff;
  }
`;

const Pagination = ({ numPages, currentPage, setCurrentPage }) => {
  const showedPage =
    currentPage === 0
      ? 1
      : currentPage === numPages - 1
      ? numPages - 2
      : currentPage;

  return (
    <PaginationWrapper>
      <button onClick={() => setCurrentPage(0)}>&lt;&lt;</button>

      <button
        value={currentPage === numPages - 1 ? showedPage : showedPage - 1}
        onClick={(event) => {
          setCurrentPage(Number(event.target.value));
        }}
      >
        &lt;
      </button>

      <button
        value={showedPage - 1}
        className={currentPage === showedPage - 1 ? 'active' : ''}
        onClick={(event) => {
          setCurrentPage(Number(event.target.value));
        }}
      >
        {showedPage}
      </button>
      <button
        value={showedPage}
        className={currentPage === showedPage ? 'active' : ''}
        onClick={(event) => {
          setCurrentPage(Number(event.target.value));
        }}
      >
        {showedPage + 1}
      </button>
      <button
        value={showedPage + 1}
        className={currentPage === showedPage + 1 ? 'active' : ''}
        onClick={(event) => {
          setCurrentPage(Number(event.target.value));
        }}
      >
        {showedPage + 2}
      </button>

      <button
        value={currentPage === 0 ? showedPage : showedPage + 1}
        onClick={(event) => {
          setCurrentPage(Number(event.target.value));
        }}
      >
        &gt;
      </button>

      <button onClick={() => setCurrentPage(numPages - 1)}>&gt;&gt;</button>
    </PaginationWrapper>
  );
};

export default Pagination;
