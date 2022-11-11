import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Navbar from './components/pages/layout/Navbar'
import AddUser from './components/user/AddUser'
import Edit from './components/user/Edit'
import View from './components/user/View'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/user/add" element={<AddUser />} />
          <Route exact path="/user/:id" element={<Edit />} />
          <Route exact path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
