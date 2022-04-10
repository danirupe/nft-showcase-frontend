import React from 'react'
import '../../assets/css/alerts.css'
import { AiOutlineClose } from 'react-icons/ai'

const Alert = (props) => {
  return (
    <div className={`modal ${props.open ? 'active-modal' : ''}`}>
      <div className='modal__content'>
        <h4 className='modal__title'>Eliminar juego</h4>
        <AiOutlineClose className='modal__close' onClick={props.handleClose} />

        <div className='modal__message'>
          Estás a punto de eliminar el juego, ¿estás seguro?
        </div>

        <div className='modal__buttons'>
          <button
            className='button button--warning'
            onClick={props.handleRemove}
          >
            Borrar
          </button>
          <button
            value='cancel'
            className='button button--bor'
            onClick={props.handleClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Alert
