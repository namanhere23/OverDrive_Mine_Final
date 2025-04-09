import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datefns from './datefns.jsx';
import Spin from './spin.jsx';
import CF from './codeforces.jsx';
import Movie from './movie.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Datefns/>
      <Movie/>
      <CF />
    </>
  )
}

export default App
