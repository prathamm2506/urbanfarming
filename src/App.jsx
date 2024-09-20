import { useState } from 'react'
import Courses from './components/courses/Courses'
import Home from './components/home/Home'
import Us from './components/us/Us'
import Coursedesc from './components/courses/Course/Coursedesc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Us/>
     <Courses/>
     <Coursedesc/>
    </>
  )
}

export default App