import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import LoginPage from './pages/LoginPage';
import TodoListPage from './pages/TodoListPage';
function App() {
  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/todo" element={<TodoListPage />} />
      </Routes>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default App;
