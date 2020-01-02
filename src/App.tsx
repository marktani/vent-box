import React from 'react'
import VentBox from './VentBox'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="label">Vent Box</div>
      </header>
      <VentBox />
    </div>
  )
}

export default App
