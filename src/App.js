import React from "react"
import Header from "./components/Header"
import Play from "./components/Play"
import Footer from "./components/Footer"
import Game from "./components/Game"
import { Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Play />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  )
}

export default App
