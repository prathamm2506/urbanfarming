import { useState } from 'react'
import Courses from './components/courses/Courses'
import Home from './components/home/Home'
import Us from './components/us/Us'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Us/>
     <Courses/>
    </>
  )
}

export default App