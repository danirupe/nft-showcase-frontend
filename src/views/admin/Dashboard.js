import React from 'react'
import DashboardMenu from '../../components/ui/admin/DashboardMenu'

const Dashboard = () => {
  return (
    <section className='dashboard section'>
      <div className='dashboard__container container'>
        <h2 className='account__title'>Mi cuenta</h2>
        <DashboardMenu />
      </div>
    </section>
  )
}

export default Dashboard
