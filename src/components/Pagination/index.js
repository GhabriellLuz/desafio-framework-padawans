const Pagination = ({ numPages, currentPage, setCurrentPage }) => {
  return (
    <div>
      {currentPage > 0 && (
        <>
          <button
            value={currentPage - 1}
            onClick={(event) => {
              setCurrentPage(Number(event.target.value));
            }}
          >
            &lt;
          </button>
          <button
            value={currentPage - 1}
            onClick={(event) => {
              setCurrentPage(Number(event.target.value));
            }}
          >
            {currentPage}
          </button>
        </>
      )}

      <button
        style={{ backgroundColor: 'gray' }}
        value={currentPage}
        onClick={(event) => {
          setCurrentPage(Number(event.target.value));
        }}
      >
        {currentPage + 1}
      </button>

      {currentPage < numPages - 1 && (
        <>
          <button
            value={currentPage + 1}
            onClick={(event) => {
              setCurrentPage(Number(event.target.value));
            }}
          >
            {currentPage + 2}
          </button>
          <button
            value={currentPage + 1}
            onClick={(event) => {
              setCurrentPage(Number(event.target.value));
            }}
          >
            &gt;
          </button>
        </>
      )}

      {/* {Array.from(Array(numPages), (item, index) => {
        return (
          <button
            key={index}
            style={index === currentPage ? { backgroundColor: 'gray' } : null}
            value={index}
            onClick={(event) => {
              setCurrentPage(Number(event.target.value));
            }}
          >
            {index + 1}
          </button>
        );
      })} */}
    </div>
  );
};

export default Pagination;
