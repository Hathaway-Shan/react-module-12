import React, { useContext } from 'react';
import { GameContext } from '../../Context/Context';
import './HUD.css';

export default function HUD() {
  const { player } = useContext(GameContext);

  return (
    //add conditional line to change display if winner is true
    <div className="HUD-wrapper">
      <span className="HUD-display">Active Player is {player}</span>
    </div>
  );
}
