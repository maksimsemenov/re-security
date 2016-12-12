import React, { Component } from 'react'
import Terminal from './Terminal'
import { v4 } from 'uuid'
import './App.css'

const generateTerminals = () =>
  new Array(200).fill(1).map(() => ({
    guid: v4(),
    attacks: new Array(90).fill(1).map(() => ({
      file: Math.round(Math.random() * 20),
      network: Math.round(Math.random() * 20),
      registry: Math.round(Math.random() * 20),
      process: Math.round(Math.random() * 20),
      suspicios: Math.round(Math.random() * 20)
    }))
  }))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { terminals: generateTerminals() }
  }

  generateData() {
    this.setState({ terminals: generateTerminals() })
  }

  render() {
    const { terminals } = this.state
    return (
      <div className="App">
        <button onClick={() => this.generateData()}>Generate data</button>
        <div className='app__terminals'>
          {terminals.map((terminal, index) =>
            <Terminal key={index} {...terminal} />
          )}
        </div>
      </div>
    )
  }
}

export default App
