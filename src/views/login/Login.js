import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoChevronBackSharp } from 'react-icons/io5'
import { AuthContext } from '../../utility/context/auth/AuthContext'
import { api } from '../../utility/services/apiCRUD.service'
import { useForm } from '../../utility/hooks/useForms'
import Header from '../../components/header/Header'
import errorHandler from '../../utility/helpers/error-handler'

const initialState = {
  email: '',
  password: ''
}
const initialStateC = {
  nameC: '',
  emailC: '',
  passwordC: '',
  passwordCC: ''
}

const Login = () => {
  let navigate = useNavigate()
  const { handleLogin } = useContext(AuthContext)
  const [values, setValues, onChange] = useForm(initialState)
  const [valuesC, setValuesC, onChangeC] = useForm(initialStateC)
  const [errors, setErrors] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    api
      .login('auth', values)
      .then((res) => {
        if (res.ok) {
          handleLogin({
            name: res.name,
            uid: res.uid,
            token: res.token,
            role: res.role
          })
          localStorage.setItem('token', res.token)
          navigate('/admin', { replace: true })
        }
      })
      .catch((err) => {
        console.log('Error: ', err)
        const data = errorHandler(err)
        setErrors(data)
      })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const user = {
      name: valuesC.nameC,
      email: valuesC.emailC,
      password: valuesC.passwordC
    }

    if (valuesC.passwordC !== valuesC.passwordCC) {
      console.log('Las contraseñas no coinciden')
    } else {
      api
        .register('auth/new', user)
        .then((res) => {
          if (res.ok) {
            handleLogin({ name: res.name, uid: res.uid, token: res.token })
            localStorage.setItem('token', res.token)
            navigate('/admin', { replace: true })
          }
        })
        .catch((err) => {
          const data = errorHandler(err)
          setErrors(data)
        })
    }
  }

  return (
    <>
      <Header />
      <main className='main'>
        <section className='login section'>
          <div className='login__container container'>
            {errors && (
              <div className='errors__list'>
                {errors.map((item) => (
                  <p
                    className='errors_item'
                    key={Math.floor(Math.random() * (10000 - 1 + 1) + 1)}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
            <div className='login__wrapper'>
              <div className='login__box'>
                <h3 className='login__title'>Iniciar sesion</h3>

                <form className='login__form form' onSubmit={handleSubmit}>
                  <label className='form__label'>
                    Email: <span className='degraded'>*</span>
                  </label>
                  <input
                    className='form__input form__input--login'
                    type='email'
                    name='email'
                    onChange={onChange}
                    required
                  />

                  <label className='form__label'>
                    Contraseña: <span className='degraded'>*</span>
                  </label>
                  <input
                    className='form__input form__input--login'
                    type='password'
                    name='password'
                    onChange={onChange}
                    autoComplete='password'
                    required
                  />
                  <button type='submit' className='button button--login'>
                    Login
                  </button>
                </form>
              </div>

              <div className='login__box'>
                <h3 className='login__title'>Crear una cuenta</h3>
                <form className='login__form form' onSubmit={handleRegister}>
                  <label className='form__label'>
                    Name: <span className='degraded'>*</span>
                  </label>
                  <input
                    className='form__input form__input--login'
                    type='text'
                    name='nameC'
                    value={valuesC.nameC}
                    onChange={onChangeC}
                    required
                  />

                  <label className='form__label'>
                    Email: <span className='degraded'>*</span>
                  </label>
                  <input
                    className='form__input form__input--login'
                    type='email'
                    name='emailC'
                    value={valuesC.emailC}
                    onChange={onChangeC}
                    autoComplete='email'
                    required
                  />

                  <label className='form__label'>
                    Contraseña: <span className='degraded'>*</span>
                  </label>
                  <input
                    className='form__input form__input--login'
                    type='password'
                    name='passwordC'
                    value={valuesC.passwordC}
                    onChange={onChangeC}
                    autoComplete='new-password'
                    required
                  />

                  <label className='form__label'>
                    Repetir contraseña: <span className='degraded'>*</span>
                  </label>
                  <input
                    className='form__input form__input--login'
                    type='password'
                    name='passwordCC'
                    value={valuesC.passwordCC}
                    onChange={onChangeC}
                    autoComplete='new-password'
                    required
                  />
                  <button type='submit' className='button button--login'>
                    Registrarse
                  </button>
                </form>
              </div>
            </div>
            <Link
              to='/'
              className='button button--bor button--login button--icon'
            >
              <IoChevronBackSharp className='button__icon' />
              Volver
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
