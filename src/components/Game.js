import React, { useEffect, useState } from "react"

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState("")
  const [playerWin, setPlayerWin] = useState("")

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"]
    setHouse(choices[Math.floor(Math.random() * 3)])
  }

  useEffect(() => {
    newHousePick()
  }, [])

  return (
    <div className="game">
      my choice: {myChoice}
      House choice: {house}
    </div>
  )
}

export default Game
