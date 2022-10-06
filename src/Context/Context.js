// import { useContext } from 'react';
import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const players = {
    X: {
      symbol: 'X',
    },
    O: {
      symbol: 'O',
    },
  };

  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const activePlayer = () => {
    player === 'X' ? setPlayer('O') : setPlayer('X');
  };

  //click handler function
  const handleClick = (arrayIndex, index) => {
    if (board[arrayIndex][index] !== '') {
      console.log(`${arrayIndex}, ${index} is not a valid move`);
      return;
    }
    if (player === 'X') {
      board[arrayIndex][index] = players.X.symbol;
    }
    if (player === 'O') {
      board[arrayIndex][index] = players.O.symbol;
    }
    setBoard((board) => [...board]);
    activePlayer();
  };

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        player,
        setPlayer,
        winner,
        setWinner,
        handleClick,
        activePlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
