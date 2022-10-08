import { useContext } from 'react';
import { GameContext } from '../src/Context/Context';
import './App.css';
import GameBoard from './components/gameBoard/gameBoard';
import HUD from './components/HUD/HUD';

function App() {
  const { board, setBoard, handleClick, player, setPlayer, activePlayer } = useContext(GameContext);
  return (
    <div className="main">
      <HUD player={player} />
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
