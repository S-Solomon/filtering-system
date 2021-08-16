import React, { useState } from 'react'
import items from './allData'
import Menu from './components/Menu'
import Button from './components/Button'

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState([]);

  return (
    <div className="App">
      <div className="title">
        <h1>
        Portfolio
          <span>Filter</span>
        </h1>
      </div>

      <Button />
      <Menu menuItem={menuItem}/>
    </div>
  )
}

export default App
