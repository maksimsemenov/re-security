import React, { Component } from 'react'
import Terminal from './Terminal'
import { terminals } from './data'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {terminals.map((terminal, index) =>
          <Terminal key={index} {...terminal} />
        )}
      </div>
    )
  }
}

export default App
