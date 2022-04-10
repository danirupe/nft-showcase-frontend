import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { api } from '../../utility/services/apiCRUD.service'
import parse from 'html-react-parser'
import { IoIosGitNetwork } from 'react-icons/io'
import { IoNewspaperOutline } from 'react-icons/io5'
import { BiBitcoin, BiDevices } from 'react-icons/bi'
import { BsCalendarDate } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'
import { AuthContext } from '../../utility/context/auth/AuthContext'
import Alert from '../../components/ui/Alert'
import DashboardMenu from '../../components/ui/admin/DashboardMenu'

const initialState = {
  name: '',
  web: '',
  description: '',
  home_img: '',
  release_date: '',
  platforms: '',
  whitepaper: '',
  token: '',
  network: '',
  instagram: '',
  twitter: '',
  telegram: '',
  content: '',
  activated: false
}

const ViewNftGame = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  const { state } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [values, setValues] = useState(initialState)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    api
      .getOne('adm/nftgames/', id, { 'x-token': state.token })
      .then((res) => {
        res.ok ? setValues(res.game) : console.log(res.msg)
      })
      .then(() => {
        setLoading(false)
      })
  }, [])

  const handleRemove = () => {
    api.remove('adm/nftgames/', id, { 'x-token': state.token }).then((res) => {
      if (res.ok) {
        navigate('/admin/nftgames', { replace: true })
      }
    })
  }

  if (loading)
    return (
      <div className='container__loader container'>
        <div className='loader'></div>
      </div>
    )

  return (
    <section className='viewNftGame section'>
      <div className='viewNftGame__container container'>
        <h2 className='account__title'>Mi cuenta</h2>
        <DashboardMenu />
        <div className='viewNftGame__wrapper'>
          <h2 className='viewNftGame__title'>{values.name}</h2>
          <div className='viewNftGame__description'>{values.description}</div>
          <div className='viewNftGame__info'>
            <div className='viewNftGame__img'>
              <img src={values.home_img} alt={values.name} />
            </div>

            <div className='viewNftGame__box'>
              <p className='viewNftGame__item'>
                <MdWeb className='viewNftGame__svg' />
                Página web:{' '}
                <a
                  href={values.web}
                  className='viewNftGame__value--a'
                  target='_blank'
                >
                  Ver
                </a>
              </p>
              <p className='viewNftGame__item'>
                <BsCalendarDate className='viewNftGame__svg' />
                Fecha de lanzamiento:{' '}
                <span className='viewNftGame__value'>
                  {new Date(values.release_date).toLocaleDateString()}
                </span>
              </p>
              <p className='viewNftGame__item'>
                <BiDevices className='viewNftGame__svg' />
                Plataformas:{' '}
                <span className='viewNftGame__value'>{values.platforms}</span>
              </p>
            </div>

            <div className='viewNftGame__box'>
              <p className='viewNftGame__item'>
                <IoNewspaperOutline className='viewNftGame__svg' />
                Whitepapaer:{' '}
                {values.whitepaper ? (
                  <a
                    href={values.whitepaper}
                    className='viewNftGame__value--a'
                    target='_blank'
                  >
                    Ver
                  </a>
                ) : (
                  'No disponible'
                )}
              </p>
              <p className='viewNftGame__item'>
                <BiBitcoin className='viewNftGame__svg' size={20} />
                Token:{' '}
                {values.token ? (
                  <span className='viewNftGame__value'>{values.token}</span>
                ) : (
                  'No disponible'
                )}
              </p>
              <p className='viewNftGame__item'>
                <IoIosGitNetwork className='viewNftGame__svg' />
                Network:{' '}
                {values.network ? (
                  <span className='viewNftGame__value'>{values.network}</span>
                ) : (
                  'No disponible'
                )}
              </p>
            </div>
          </div>

          <div className='viewNftGame__content'>{parse(values.content)}</div>
        </div>
        <div className='viewNftGame__buttons'>
          <Link to={`/admin/nftgames/update/${id}`} className='button'>
            Editar
          </Link>
          <p className='button button--warning' onClick={() => setOpen(!open)}>
            Borrar
          </p>
          <Alert
            id='alertRemove'
            open={open}
            handleClose={() => setOpen(!open)}
            handleRemove={handleRemove}
          />
        </div>
      </div>
    </section>
  )
}

export default ViewNftGame
