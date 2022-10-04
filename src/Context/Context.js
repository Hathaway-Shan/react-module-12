import { useContext } from 'react';
import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useContext([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [isCPUNext, setIsCPUNext] = useContext(false);
  const [winner, setWinner] = useContext(null);

  const playFn = (arrayIndex, index) => {
    //function body here
  };

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        isCPUNext,
        setIsCPUNext,
        winner,
        setWinner,
        playFn,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
