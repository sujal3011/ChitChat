import React from 'react'
import self_image from '../assets/self_image.jpeg'

const Message = () => {
  return (
    <div className='message'>
      <div className="message-info">
        <img src={self_image} alt="self_image" />
      </div>

      <div className="message-content">
        <p>How are you ?</p>
      </div>
    </div>
  )
}

export default Message