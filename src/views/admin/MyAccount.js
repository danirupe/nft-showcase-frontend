import React from 'react'
import DashboardMenu from '../../components/ui/admin/DashboardMenu'

const MyAccount = () => {
  return (
    <section className='account section'>
      <div className='account__container container'>
        <h2 className='account__title'>Mi cuenta</h2>
        <DashboardMenu />
        <h3 className='account__subtitle'>Datos personales</h3>
        <div className='account__content'>
          <div className='account__switch'>
            <form className='account__form form'></form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
