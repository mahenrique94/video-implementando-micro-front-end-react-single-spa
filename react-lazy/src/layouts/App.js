import React from 'react'
import {Link  } from 'react-router-dom'

const App = ({ children }) => (
  <main>
    <h1>@mc/react-lazy</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    {children}
  </main>
)

export default App