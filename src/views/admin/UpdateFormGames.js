import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'
import { useForm } from '../../utility/hooks/useForms'
import FileBase64 from 'react-file-base64'
import { api } from '../../utility/services/apiCRUD.service'
import { FaTwitter, FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import { AuthContext } from '../../utility/context/auth/AuthContext'
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

const UpdateFormGames = () => {
  let { id } = useParams()
  const [values, setValues, onChange] = useForm(initialState)
  const { state } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

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

  const onEditorChange = (e) => {
    const content = e
    setValues({
      ...values,
      content
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    api
      .update('adm/nftgames/', id, values, { 'x-token': state.token })
      .then((res) => {
        console.log(res)
        if (res.ok) {
          setValues(res.game)
        } else {
          console.log(res)
        }
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }

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
        <h3 className='formGames__title'>Editar {values.name} NFT Game</h3>
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
              <div className='form__box'>
                <label className='form__label'>
                  Página web oficial: <span className='degraded'>*</span>
                </label>
                <input
                  className='form__input'
                  name='web'
                  type='url'
                  onChange={onChange}
                  value={values.web}
                  required
                />
              </div>
            </div>

            <div className='form__box'>
              <label className='form__label'>
                Breve descripción: <span className='degraded'>*</span>
              </label>
              <textarea
                name='description'
                onChange={onChange}
                value={values.description}
                className='form__input'
                rows={1}
              ></textarea>
            </div>

            <div className='form__box'>
              <label className='form__label'>
                Imagen de portada: <span className='degraded'>*</span>
              </label>
              <FileBase64
                required
                className='form__input--file'
                type='file'
                multiple={false}
                onDone={({ base64 }) =>
                  setValues({ ...values, home_img: base64 })
                }
              />
            </div>

            <div className='form__content'>
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
                  value={new Date(values.release_date).toLocaleDateString(
                    'en-CA'
                  )}
                />
              </div>

              <div className='form__box'>
                <label className='form__label'>
                  Plataformas disponibles: <span className='degraded'>*</span>
                </label>
                <input
                  required
                  className='form__input'
                  type='text'
                  name='platforms'
                  onChange={onChange}
                  value={values.platforms}
                />
              </div>
            </div>

            <div className='form__content--three'>
              <div className='form__box'>
                <label className='form__label'>Whitepaper:</label>
                <input
                  className='form__input'
                  name='whitepaper'
                  type='url'
                  onChange={onChange}
                  value={values.whitepaper}
                />
              </div>

              <div className='form__box'>
                <label className='form__label'>Token:</label>
                <input
                  className='form__input'
                  name='token'
                  type='text'
                  onChange={onChange}
                  value={values.token}
                />
              </div>

              <div className='form__box'>
                <label className='form__label'>Network:</label>
                <input
                  className='form__input'
                  name='network'
                  type='text'
                  onChange={onChange}
                  value={values.network}
                />
              </div>
            </div>

            <div className='form__box'>
              <label className='form__label'>Redes sociales:</label>
              <div className='form__inner'>
                <div className='form__item'>
                  <FaInstagram className='form__svg' size={25} />
                  <input
                    className='form__input'
                    name='instagram'
                    type='text'
                    onChange={onChange}
                    value={values.instagram}
                  />
                </div>
                <div className='form__item'>
                  <FaTwitter className='form__svg' size={25} />
                  <input
                    className='form__input'
                    name='twitter'
                    type='text'
                    onChange={onChange}
                    value={values.twitter}
                  />
                </div>
                <div className='form__item'>
                  <FaTelegramPlane className='form__svg' size={25} />
                  <input
                    className='form__input'
                    name='telegram'
                    type='text'
                    onChange={onChange}
                    value={values.telegram}
                  />
                </div>
              </div>
            </div>

            <Editor
              name='content'
              apiKey='7vicfngaszyydd676xou0tladkwbwyfuk610hpu8imrk7wki'
              value={values.content}
              init={{
                body_class: 'form__editor',
                height: 450,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image',
                  'charmap print preview anchor help',
                  'searchreplace',
                  'insertdatetime media table paste wordcount',
                  'emoticons'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | table image insertdatetime | preview searchreplace emoticons | help '
              }}
              onEditorChange={onEditorChange}
            />
            <button type='submit' className='button form__button'>
              Actualizar
            </button>
          </form>
          {/*==================== FORM ====================*/}
        </div>
      </div>
    </section>
  )
}

export default UpdateFormGames
