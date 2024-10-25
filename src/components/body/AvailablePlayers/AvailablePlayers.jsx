import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({players, balance, setBalance, setSelectedPlayers, selectedPlayers}) => {

  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 border-2 border-gray-200 p-4 rounded-xl bg-gray-50">
        {players.map((player, index) => (
          <PlayerCard player={player} key={index} balance ={balance} setBalance={setBalance} setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}/>
        ))}
      </div>
    </div>
  );
};
export default AvailablePlayers;
