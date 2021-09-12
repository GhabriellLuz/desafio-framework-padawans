const PaginationSize = ({ pageElements, setPageElements }) => {
  return (
    <div>
      Exibir: &nbsp;
      <select
        value={pageElements}
        onChange={(event) => setPageElements(Number(event.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
      </select>
    </div>
  );
};

export default PaginationSize;
