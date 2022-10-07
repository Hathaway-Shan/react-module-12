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
  // const [draw, setDraw] = useState(null);

  const activePlayer = () => {
    player === 'X' ? setPlayer('O') : setPlayer('X');
  };

  //check winner function
  const checkWinner = () => {
    //check rows
    for (let index = 0; index < board.length; index++) {
      const row = board[index];
      if (row.every((cell) => cell === players.X.symbol)) {
        //set winner
        setWinner(players.X.symbol);
        console.log('row winner state is:', winner);
        return;
      }
      if (row.every((cell) => cell === players.O.symbol)) {
        setWinner(players.O.symbol);
        console.log('row winner state is:', winner);
        return;
      }
    }
    //check columns
    for (let i = 0; i < 3; i++) {
      const column = board.map((row) => row[i]);
      if (column.every((cell) => cell === players.X.symbol)) {
        setWinner(players.X.symbol);
        console.log('column winner state is:', winner);
        return;
      }
      if (column.every((cell) => cell === players.O.symbol)) {
        setWinner(players.O.symbol);
        console.log('column winner state is:', winner);
        return;
      }
    }
    //check diagonals starting with 0
    const firstDiagonal = [board[0][0], board[1][1], board[2][2]];
    const secondDiagonal = [board[0][2], board[1][1], board[2][0]];
    if (firstDiagonal.every((cell) => cell === players.X.symbol)) {
      setWinner(players.X.symbol);
      console.log('firstDiagonal winner state is:', winner);
      return;
    }
    if (firstDiagonal.every((cell) => cell === players.O.symbol)) {
      setWinner(players.O.symbol);
      console.log('firstDiagonal winner state is:', winner);
      return;
    }
    if (secondDiagonal.every((cell) => cell === players.X.symbol)) {
      setWinner(players.X.symbol);
      console.log('secondDiagonal winner state is: ', winner);
    }
    if (secondDiagonal.every((cell) => cell === players.O.symbol)) {
      setWinner(players.O.symbol);
      console.log('secondDiagonal winner state is: ', winner);
    }
  };

  //click handler function
  const handleClick = (arrayIndex, index) => {
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
