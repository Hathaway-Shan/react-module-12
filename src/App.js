import { useContext } from 'react';
import { GameContext } from '../src/Context/Context';
import './App.css';
import GameBoard from './components/gameBoard/gameBoard';

function App() {
  const { board, setBoard, handleClick, player, setPlayer, activePlayer } = useContext(GameContext);
  return (
    <div className="main">
      <GameBoard
        board={board}
        setBoard={setBoard}
        handleClick={handleClick}
        player={player}
        setPlayer={setPlayer}
        activePlayer={activePlayer}
      />
    </div>
  );
}

export default App;
