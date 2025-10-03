import { useState } from 'react'
import reactLogo from './assets/react.svg'

import logo from './assets/logohy.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>

      <h1>HAKEY</h1>
    </div>
      <div>
      <a href="" target="_blank">
          <img src={logo} className="logo" alt=" Logo Hakey" />
      </a>
      </div>
      <h1>Las Mejores keys</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
