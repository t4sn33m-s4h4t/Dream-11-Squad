import React, { useEffect, useState } from 'react'
import Hero from './hero/Hero'
import AvailablePlayers from './AvailablePlayers/AvailablePlayers'
import ToggleBtnsRow from './ToggleBtnsRow'
import SelectedPlayers from './SelectedPlayers/ShowSelectedPlayers'

const Body = (props) => {
  const [players, setPlayers] = useState([])
  const [showSelected, setshowselected] = useState(false)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  function handleSelectBtn(e) {
    if (!e.target.classList.contains('active-btn')) {
      setshowselected(!showSelected)
    }
  }

  useEffect(() => {
    // fetch('https://dream-11-squad.surge.sh/data/data.json')
    fetch('/data/data.json')
      .then((res) => res.json())
      .then(data => setPlayers(data))
  }, [])
  return (
    <div >
      <Hero {...props} ></Hero>
      <ToggleBtnsRow showSelected={showSelected} selectedPlayerslength={selectedPlayers.length} handleSelectBtn={handleSelectBtn} />

      {
        players.length ?

          showSelected ?
            
              <SelectedPlayers {...props} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} handleSelectBtn={handleSelectBtn} showSelected={showSelected} />
           
            :
              <AvailablePlayers {...props} selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers} players={players} />
             
          :
          <div className="text-center my-5 py-5 font-bold text-2xl">
            Loading...
          </div>

      }
    </div>
  )
}

export default Body
