import React, { useContext } from 'react';
import { GameContext } from '../../Context/Context';
import './GameBoard.css';

export default function GameBoard() {
  const { board, handleClick } = useContext(GameContext);
  return (
    <div className="container">
      <div className="column">
        <span onClick={() => handleClick(0, 0)} className="cell">
          <div>{board[0][0]}</div>
        </span>
        <span onClick={() => handleClick(0, 1)} className="cell">
          {board[0][1]}
        </span>
        <span onClick={() => handleClick(0, 2)} className="cell">
          {board[0][2]}
        </span>
      </div>
      <div className="column">
        <span onClick={() => handleClick(1, 0)} className="cell">
          {board[1][0]}
        </span>
        <span onClick={() => handleClick(1, 1)} className="cell">
          {board[1][1]}
        </span>
        <span onClick={() => handleClick(1, 2)} className="cell">
          {board[1][2]}
        </span>
      </div>
      <div className="column">
        <span onClick={() => handleClick(2, 0)} className="cell">
          {board[2][0]}
        </span>
        <span onClick={() => handleClick(2, 1)} className="cell">
          {board[2][1]}
        </span>
        <span onClick={() => handleClick(2, 2)} className="cell">
          {board[2][2]}
        </span>
      </div>
    </div>
  );
}
