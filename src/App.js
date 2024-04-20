import './App.css';
import Board from './components/gameBoard/game-board';
import Layout from './components/actionButtons/action-layout';

function App() {
  return (
    <main className="App flex flex-col bg-slate-300 h-screen justify-center p-3">
      <Layout></Layout>
      <Board></Board>
    </main>
  );
}

export default App;
