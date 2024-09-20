import { useState } from 'react'
import Courses from './components/courses/Courses'
import Home from './components/home/Home'
import Us from './components/us/Us'
import Marketplace from './components/Marketplace/Marketplace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Us/>
     <Courses/>
     <Marketplace/>
    </>
  )
}

export default App