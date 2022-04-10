import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Home from '../views/home'
import Game from '../views/home/Game'

const HomeRoutes = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nftgames/:id' element={<Game />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default HomeRoutes
