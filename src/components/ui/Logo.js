import React from 'react'
import { IoGameControllerOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Logo = (props) => {
  const { clase } = props
  return (
    <Link to='/' className={clase}>
      <IoGameControllerOutline size={30} color={'#6446e6'} />
      <span className='degraded'>NFT</span>Games
    </Link>
  )
}

export default Logo
