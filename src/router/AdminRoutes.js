import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Dashboard from '../views/admin/Dashboard'
import AddFormGames from '../views/admin/AddFormGames'
import UpdateFormGames from '../views/admin/UpdateFormGames'
import FormGames from '../views/admin/FormGames'
import ViewNftGame from '../views/admin/ViewNftGame'
import MyAccount from '../views/admin/MyAccount'
import Pruebas from '../views/admin/Pruebas'

const AdminRoutes = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          {/* <Route path='/nftgames/new' element={<AddFormGames />} /> */}
          <Route path='/nftgames/new' element={<Pruebas />} />
          <Route path='nftgames' element={<FormGames />} />
          <Route path='myaccount' element={<MyAccount />} />
          <Route path='nftgames/:id' element={<ViewNftGame />} />
          <Route path='nftgames/update/:id' element={<UpdateFormGames />} />
          <Route path='' element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default AdminRoutes
