import { useState } from 'react'
import Courses from './components/courses/Courses'
import Home from './components/home/Home'
import Us from './components/us/Us'
import Navbar from './components/navbar/Navbar'
import Chat from './components/chat/Chat'
import Footer from './components/Footer/Footer'
import Marketplace from './components/Marketplace/Marketplace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Us/>
     <Courses/>
     <Marketplace/>
     <Chat/>
     <Footer/>
    </>
  )
}

export default App