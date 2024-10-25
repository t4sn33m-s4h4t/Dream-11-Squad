import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';



const ShowSelectedPlayers = (props) => {

  return (
    <div className="flex flex-col space-y-5">


      
      {props.selectedPlayers.map((selectedPlayer) => (
        <SelectedPlayerCard key={selectedPlayer.id} selectedPlayer={selectedPlayer} {...props}/>
      ))}




      <div className='border-2 border-gray-300 p-1 rounded-xl w-fit'>
       <button className={`px-7 rounded-xl py-3 text-black transition bg-yellow-400 hover:bg-black hover:text-white  font-semibold border border-gray-200 `} onClick={props.handleSelectBtn}>Add More Players</button>
       </div>
    </div>
  );
};

export default ShowSelectedPlayers;