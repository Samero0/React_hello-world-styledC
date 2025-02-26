import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Hello world</Title>
      </header>
    </div>
  );
}

export default App;
