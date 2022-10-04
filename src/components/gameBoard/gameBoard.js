import React, { useContext } from 'react';
import { GameContext } from '../../../src/Context/Context';
import './gameBoard.css';

export default function GameBoard() {
  const { board, playFn } = useContext(GameContext);
  return (
    <div className="container">
      <div className="column">
        <span onClick={() => playFn(0, 0)} className="cell">
          {board[0][0]}
        </span>
        <span onClick={() => playFn(0, 1)} className="cell">
          {board[0][1]}
        </span>
        <span onClick={() => playFn(0, 2)} className="cell">
          {board[0][2]}
        </span>
      </div>
      <div className="column">
        <span onClick={() => playFn(1, 0)} className="cell">
          {board[1][0]}
        </span>
        <span onClick={() => playFn(1, 1)} className="cell">
          {board[1][1]}
        </span>
        <span onClick={() => playFn(1, 2)} className="cell">
          {board[1][2]}
        </span>
      </div>
      <div className="column">
        <span onClick={() => playFn(2, 0)} className="cell">
          {board[2][0]}
        </span>
        <span onClick={() => playFn(2, 1)} className="cell">
          {board[2][1]}
        </span>
        <span onClick={() => playFn(2, 2)} className="cell">
          {board[2][2]}
        </span>
      </div>
    </div>
  );
}
