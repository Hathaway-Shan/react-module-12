import React, { useContext } from 'react';
import { GameContext } from '../../Context/Context';
import './HUD.css';

export default function HUD() {
  const { player, winner } = useContext(GameContext);

  if (!winner) {
    return (
      <div className="HUD-wrapper">
        <span className="HUD-display">Active Player is {player}</span>
      </div>
    );
  }

  if (winner === 'draw') {
    return (
      <div className="HUD-wrapper">
        <span className="HUD-display">Drawn Game! Better luck next time.</span>
      </div>
    );
  }

  if (winner) {
    return (
      <div className="HUD-wrapper">
        <span className="HUD-display">{winner} Wins! Well Played...</span>
      </div>
    );
  }
}
