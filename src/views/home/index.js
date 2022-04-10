import React from 'react'
import Games from './Games'
import NextLaunches from './NextLaunches'
import TodayGame from './TodayGame'
import Welcome from './Welcome'

const Home = () => {
  return (
    <>
      <Welcome />
      <NextLaunches />
      <TodayGame />
      <Games />
    </>
  )
}

export default Home
