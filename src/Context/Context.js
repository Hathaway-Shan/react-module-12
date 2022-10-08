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

  //check winner function
  const checkWinner = () => {
    //check rows
    for (let index = 0; index < board.length; index++) {
      const row = board[index];
      if (row.every((cell) => cell === players.X.symbol)) {
        setWinner(players.X.symbol);
        return;
      }
      if (row.every((cell) => cell === players.O.symbol)) {
        setWinner(players.O.symbol);
        return;
      }
    }
    //check columns
    for (let i = 0; i < 3; i++) {
      const column = board.map((row) => row[i]);
      if (column.every((cell) => cell === players.X.symbol)) {
        setWinner(players.X.symbol);
        return;
      }
      if (column.every((cell) => cell === players.O.symbol)) {
        setWinner(players.O.symbol);
        return;
      }
    }
    //check diagonals starting with array 0
    const firstDiagonal = [board[0][0], board[1][1], board[2][2]];
    const secondDiagonal = [board[0][2], board[1][1], board[2][0]];
    if (firstDiagonal.every((cell) => cell === players.X.symbol)) {
      setWinner(players.X.symbol);
      return;
    }
    if (firstDiagonal.every((cell) => cell === players.O.symbol)) {
      setWinner(players.O.symbol);
      return;
    }
    if (secondDiagonal.every((cell) => cell === players.X.symbol)) {
      setWinner(players.X.symbol);
    }
    if (secondDiagonal.every((cell) => cell === players.O.symbol)) {
      setWinner(players.O.symbol);
    }
    //check for draws
    if (board.flat().every((cell) => cell !== '')) {
      setWinner('draw');
      return;
    }
  };

  //click handler function
  const handleClick = (arrayIndex, index) => {
    if (winner === players.X.symbol) {
      return;
    }
    if (winner === players.O.symbol) {
      return;
    }
    if (winner === 'draw') {
      return;
    }
    if (board[arrayIndex][index] !== '') {
      return;
    }
    if (player === 'X') {
      board[arrayIndex][index] = players.X.symbol;
    }
    if (player === 'O') {
      board[arrayIndex][index] = players.O.symbol;
    }

    setBoard((board) => [...board]);
    checkWinner();
    activePlayer();
  };

  const newGame = () => {
    //reset state for new game
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setWinner(null);
    setPlayer('X');
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
        newGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
