import React, { useContext } from 'react'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'
import Switch from '../Switch'
import { AuthContext } from '../../../utility/context/auth/AuthContext'

const RowNftGame = (props) => {
  const { name, description, home_img, id, activated } = props.game
  const { state } = useContext(AuthContext)
  return (
    <div className='game'>
      <div className='game__wrapper'>
        <div className={`game__img ${activated ? '' : 'disabled'}`}>
          <img src={home_img} alt={name} />
        </div>
        <div className={`game__img ${activated ? '' : 'disabled'}`}>
          <h2 className='game__title'>{name}</h2>
          {description && parse(description)}
        </div>
        <div className='game__actions'>
          {state.role !== 'user' ? (
            <div>
              <Switch game={props.game} token={state.token} />
              <Link to={id} className='button'>
                Ver
              </Link>
            </div>
          ) : (
            <Link to={id} className='button'>
              Ver
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default RowNftGame
