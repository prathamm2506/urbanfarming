import { useState } from 'react'
import Courses from './components/courses/Courses'
import Home from './components/home/Home'
import Us from './components/us/Us'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Us/>
     <Courses/>
    </>
  )
}

export default App