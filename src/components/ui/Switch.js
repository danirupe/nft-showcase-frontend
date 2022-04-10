import React, { useState, useEffect } from 'react'
import useFirstRender from '../../utility/hooks/useFirstRender.js'
import { api } from '../../utility/services/apiCRUD.service'

const Switch = (props) => {
  const gameData = props.game,
    token = props.token

  const [game, setGame] = useState(gameData)
  const { id } = gameData
  const isFirstRender = useFirstRender()

  const handleCheckbox = () => {
    setGame({ ...game, activated: !game.activated })
  }

  useEffect(() => {
    if (!isFirstRender) {
      api
        .update('adm/nftgames/', id, game, { 'x-token': token })
        .then((res) => {
          if (res.ok) {
            console.log('Juego activado correctamente')
          }
        })
        .catch((err) => {
          //console.log(err)
        })
    }
  }, [game])

  return (
    <label className='switch'>
      <input
        type='checkbox'
        defaultChecked={gameData.activated}
        onChange={handleCheckbox}
      />
      <span className='switch__slider switch__slider--round'></span>
    </label>
  )
}

export default Switch
