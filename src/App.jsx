import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import { useState } from "react"

function App() {

  const [activePlayer, setActivePlayer] = useState('X')

  function updateCurrentPlayer(){
    setActivePlayer((prev) => prev === 'X' ? 'O' : 'X')
  }

  const currentPlayer = activePlayer
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player  playerName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'}/>
          <Player playerName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectedSquare={updateCurrentPlayer} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
