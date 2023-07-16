import React from "react"
import Header from "./components/Header"
import Play from "./components/Play"
import Footer from "./components/Footer"
import Game from "./components/Game"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Play />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
