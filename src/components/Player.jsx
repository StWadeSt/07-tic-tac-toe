import React from 'react'
import { useState } from 'react'

const Player = ({playerName, playerSymbol, isActive}) => {

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(playerName)

  function handleNameChange(){
      isEditing ? setIsEditing(false) : setIsEditing(true) 
  }
  function handleChange(e){
    setName(e.target.value)
  }

  return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {!isEditing && <span className="player-name">{name}</span>}
          {isEditing && <input required onChange={handleChange} value={name}></input>}
          <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={() => handleNameChange()}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}

export default Player