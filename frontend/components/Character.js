import React from 'react'
import { useState } from 'react'

function Character({characterName, planetName}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showPlanet, setShowPlanet] = useState(false)

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  function togglePlanet(){
    setShowPlanet(!showPlanet)
  }
  
  return (
    <div className='character-card' onClick={togglePlanet}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{characterName}</h3>
      {showPlanet ? 
      <p>
        Planet: <span className="character-planet">{planetName}</span>
      </p>: null }
    </div>
  )
}

export default Character
