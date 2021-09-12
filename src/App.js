import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 85vh;

  .info {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }

  .credits {
    display: flex;
    align-items: flex-end;
  }

  .card {
    margin-top: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    border-radius: 4px;
    height: 50%;
    width: 50%;
  }
`;

function App() {
  return (
    <AppWrapper>
      <div className="info">
        <div className="card">
          <h1>Desafio Técnico </h1>
          <h3> Framework Padawans</h3>
        </div>
        <div className="credits">
          <h4>Desenvolvido por: Ghabriell Luz</h4>
        </div>
      </div>
    </AppWrapper>
  );
}

export default App;
