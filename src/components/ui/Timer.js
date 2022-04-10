import React from 'react'

const Timer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className='timer'>This is live!</div>
  } else {
    return (
      <div className='timer'>
        <div className='timer__wrapper'>
          <p>
            <span className='timer__number'>{days}</span>{' '}
            <span className='timer__text'>days </span>
          </p>
          <p>
            <span className='timer__number'>{hours}</span>{' '}
            <span className='timer__text'>hours </span>
          </p>
          <p>
            <span className='timer__number'>{minutes}</span>{' '}
            <span className='timer__text'>minutes </span>
          </p>
          <p>
            <span className='timer__number'>{seconds}</span>{' '}
            <span className='timer__text'>seconds </span>
          </p>
        </div>
      </div>
    )
  }
}

export default Timer
