import { useState } from 'react'
import Courses from './components/courses/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Courses/>
    </>
  )
}

export default App