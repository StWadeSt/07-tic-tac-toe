import React from 'react'
import { useState } from 'react'

const initialGameBoard =[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ({onSelectedSquare, activePlayerSymbol}) => {
    console.log(activePlayerSymbol);
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function hangleSelectedSquare(rowIndex, colIndex){
        setGameBoard((prev) => {
            const updatedBoard = [...prev.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = {activePlayerSymbol}
            console.log(updatedBoard);
            return updatedBoard
            
        })
        
        onSelectedSquare();
    }


  return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>

            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => hangleSelectedSquare(rowIndex, colIndex)}>
                        {playerSymbol}
                    </button>
                </li>)}
            </ol>

        </li>)}
    </ol>
  )
}

export default GameBoard