import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const App = ({ name }) => (
  <BrowserRouter>
    <header>
      <h1>{name}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react-single">Single</Link>
          </li>
          <li>
            <Link to="/react-lazy">Lazy</Link>
          </li>
          <li>
            <Link to="/react-multiples">Multiples</Link>
          </li>
          <li>
            <Link to="/react-route">Route</Link>
          </li>
        </ul>
      </nav>
    </header>
  </BrowserRouter>
)

export default App
