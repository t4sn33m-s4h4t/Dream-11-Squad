import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PlayerCard = ({ player, balance, setBalance, setSelectedPlayers, selectedPlayers }) => {
  
  function choosePlayerHandler(price, player) {
    const existingPlayer = selectedPlayers.find(s => s.id === player.id);
     
    if (existingPlayer) {
      toast.error(`${player.name} is Already Selected`);
    }else if(selectedPlayers.length >=6){
      toast.warning('Player Limit Exceeded')
    }else if (price >= balance) {
      toast.error("Not Enough Money. Claim Some Credit");
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      setBalance(balance - price);
      toast.success(`Congrats! ${player.name} is Now in Your Sqaud`);
    }
  }
  return (
    <div className="border-2 border-gray-200 rounded-xl bg-white">
      <div className="card bg-gray-50 shadow-lg rounded-xl border max-w-screen-sm p-4">
        <figure >
          {player.image ? (
            <img
              src={'/images/' + player.image}
              alt={player.name}
              className="rounded-t-xl w-full h-60 object-cover"
            />
          ) : (
            <div className="bg-gray-200 rounded-t-xl h-60 w-full"></div>
          )}
        </figure>

        <div className="card-body space-y-1 px-0 pt-4 p-1">
          <h2 className="card-title text-lg font-semibold flex items-center">
            <i className="fas fa-user mr-2 text-gray-600"></i>
            {player.name}
          </h2>
          <div className="flex justify-between items-center">
            <p className="flex items-center text-gray-500">
              <i className="fas fa-flag mr-2"></i> {player.country}
            </p>

            <div className="bg-gray-100 text-sm py-2 px-4 font-semibold rounded-lg font-semibold">{player.role}</div>
          </div>
          <hr className='text-red-400' />
          <p className="text-sm font-bold">Rating</p>
          <div className="flex justify-between ">
            <div>

              <p className='text-sm text-gray-500 font-semibold'>{player.batStyle ? player.batStyle : 'N/A'}</p>
            </div>

            <div>
              <p className='text-sm text-gray-500 font-semibold'>{player.bowlingStyle ? player.bowlingStyle : 'N/A'}</p>
            </div>
          </div>

          <div className="flex justify-center items-center text-sm ">
            <p className="font-bold">
              Price: ${player.price.toLocaleString()}
            </p>
            <button className="font-semibold py-2 px-3 border-2 bg-white border-gray-200 rounded-lg hover:bg-yellow-400 transition-all" onClick={()=>choosePlayerHandler(player.price, player)}>
              Choose Player
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
