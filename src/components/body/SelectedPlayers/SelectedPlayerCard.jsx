import React from 'react'
import { toast } from 'react-toastify'

const SelectedPlayerCard = ({selectedPlayers, setSelectedPlayers, selectedPlayer,balance, setBalance} ) => {
  const {name, role, image, price} = selectedPlayer
  function handleDeletePlayer(selectedPlayer) {

    const deletedList = selectedPlayers.filter(s=>s.id!==selectedPlayer.id)
    setSelectedPlayers(deletedList)
    setBalance(balance+parseInt(selectedPlayer.price))
    toast.info(selectedPlayer.name + ' Removed ')
  }
  return (
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow border-2 border-gray-100">
        <div className="flex items-center">
          <img src={'/images/'+image} alt={name} className=" h-20 w-20 rounded-2xl bg-gray-300 object-cover" />
          <div className="ml-4 space-y-1">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-sm font-sem text-gray-600">{role}</p>
            <p className="text-sm font-semibold text-gray-700">${price}</p>
          </div>
        </div>
        <div className="flex items-center">
        <button className="btn btn-sm btn-circle w-12 h-12 btn-ghost " onClick={() => handleDeletePlayer(selectedPlayer)}>
  <i className="fa-solid fa-trash text-red-400 text-xl"></i>
</button>
        </div>
      </div>
  )
}

export default SelectedPlayerCard
