import { useContext } from 'react';
import { GameContext } from '../src/Context/Context';
import './App.css';
import GameBoard from './components/gameBoard/gameBoard';

function App() {
  const { board, setBoard, isCPUNext, setIsCPUNext, winner, setWinner, playFn } =
    useContext(GameContext);
  return (
    <div className="main">
      <GameBoard />
    </div>
  );
}

export default App;
