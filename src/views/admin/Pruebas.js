import React, { useContext } from 'react'
import { useForm } from '../../utility/hooks/useForms'
import { api } from '../../utility/services/apiCRUD.service'
import { AuthContext } from '../../utility/context/auth/AuthContext'

const initialState = {
  name: '',
  web: 'https://pruebas.com',
  description: 'descripcion de prueba',
  home_img: null,
  release_date: '',
  platforms: 'Windows',
  whitepaper: '',
  token: '',
  network: '',
  instagram: '',
  twitter: '',
  telegram: '',
  content: 'Este es el contenido',
  activated: false
}

const Pruebas = () => {
  const [values, setValues, onChange] = useForm(initialState)
  const { state } = useContext(AuthContext)

  const onFileChange = (e) => {
    const content = e.target.files[0]
    setValues({
      ...values,
      home_img: content
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api
      .addImage('adm/nftgames/new', values, { 'x-token': state.token })
      .then((res) => {
        //console.log(res)
        res.ok ? setValues(initialState) : console.log(res)
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }
  return (
    <section className='formGames section'>
      <div className='formGames__container container'>
        <h3 className='formGames__title'>New NFT Game</h3>
        <div className='formGames__content'>
          {/*==================== FORM ====================*/}
          <form className='formGames__form form' onSubmit={handleSubmit}>
            <div className='form__content'>
              <div className='form__box'>
                <label className='form__label'>
                  Nombre del juego: <span className='degraded'>*</span>
                </label>
                <input
                  className='form__input'
                  name='name'
                  type='text'
                  onChange={onChange}
                  value={values.name}
                  required
                />
              </div>
            </div>

            <div className='form__box'>
              <label className='form__label'>
                Fecha de lanzamiento del juego:{' '}
                <span className='degraded'>*</span>
              </label>
              <input
                required
                className='form__input'
                type='date'
                name='release_date'
                onChange={onChange}
                value={values.release_date}
              />
            </div>

            <div className='form__box'>
              <label className='form__label'>
                Imagen de portada: <span className='degraded'>*</span>
              </label>

              <input
                name='home_img'
                type='file'
                className='form__input--file'
                onChange={onFileChange}
              />
            </div>

            <button type='submit' className='button form__button'>
              Añadir juego
            </button>
          </form>
          {/*==================== FORM ====================*/}
        </div>
      </div>
    </section>
  )
}

export default Pruebas
