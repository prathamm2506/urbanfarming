import { useState } from 'react'
import Home from './components/home/Home'
import Us from './components/us/Us'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Us/>
    </>
  )
}

export default App
