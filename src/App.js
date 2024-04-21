import './App.css';
import Board from './components/gameBoard/game-board';
import Layout from './components/settings-layout/actionButtons/action-layout';
import SettingsLayout from './components/settings-layout/inputSettings/settings-layout';

function App() {
  return (
    <main className="App flex flex-col bg-slate-300 h-screen justify-center items-center p-3 gap-5">
      <h1 className='text-3xl'>Memory Game</h1>
      <div className='opeartion-board flex flex-col gap-5'>
        <SettingsLayout></SettingsLayout>
        <Layout></Layout>
      </div>
      <Board></Board>
    </main>
  );
}

export default App;
