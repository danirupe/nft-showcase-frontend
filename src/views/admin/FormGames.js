import React, { useState, useEffect, useContext } from 'react'
import DashboardMenu from '../../components/ui/admin/DashboardMenu'
import RowNftGame from '../../components/ui/admin/RowNftGame'
import { AuthContext } from '../../utility/context/auth/AuthContext'
import { api } from '../../utility/services/apiCRUD.service'

const desactivados = (elem) => {
  return elem.activated === false
}

const activados = (elem) => {
  return elem.activated === true
}

const FormGames = () => {
  const [loading, setLoading] = useState(true)
  const [disabled, setDisabled] = useState()
  const [enabled, setEnabled] = useState()
  const { state } = useContext(AuthContext)
  const [errors, setErrors] = useState()
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0)

  useEffect(() => {
    api
      .getAll('adm/nftgames', {
        'x-token': state.token,
        limit: limit,
        skip: skip
      })
      .then((res) => {
        if (res.ok && res.games) {
          const enabled = res.games.filter(activados)
          setEnabled(enabled)
        }
        return res
      })
      .then((res) => {
        if (res.games) {
          const disabled = res.games.filter(desactivados)
          setDisabled(disabled)
        }
      })
      .then(() => {
        setLoading(false)
      })
      .catch((err) => {
        setErrors(err.msg)
      })
  }, [])

  if (errors)
    return (
      <div className='container__loader container'>
        <div className='error'>Ha ocurrido un error</div>
      </div>
    )

  if (loading)
    return (
      <div className='container__loader container'>
        <div className='loader'></div>
      </div>
    )

  return (
    <section className='formGames section'>
      <div className='formGames__container container'>
        <h2 className='account__title'>Mi cuenta</h2>
        <DashboardMenu />
        <h3 className='formGames__title'>NFT Games</h3>
        <div className='formGames__content'>
          {/*==================== TABLE ====================*/}
          <p className='formGames__subtitle'>Pendientes de activar:</p>
          {disabled.length ? (
            disabled.map((game) => <RowNftGame game={game} key={game.id} />)
          ) : (
            <p>No tienes ningún juego pendiente de activar</p>
          )}
          <p className='formGames__subtitle'>Visibles:</p>
          {enabled.length ? (
            enabled.map((item) => <RowNftGame game={item} key={item.id} />)
          ) : (
            <p>Aún tienes ningún juego visible</p>
          )}
          {/*==================== TABLE ====================*/}
        </div>
      </div>
    </section>
  )
}

export default FormGames
