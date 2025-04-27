import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Posts from './Pages/Posts/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
        <Footer />
      </Router >

    </>
  )
}

export default App
