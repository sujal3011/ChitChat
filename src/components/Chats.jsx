import React from 'react'
import self_image from '../assets/self_image.jpeg'

const Chats = () => {
  return (
    <div className='chats'>

        <div className="chat-info">

            <div className='chat-image'>
                <img src={self_image} alt="chat_image" />
            </div>

            <div className='chat-details'>
                <span>Sujal Jaiswal</span>
                <p>How are you?</p>
            </div>


        </div>

        <div className="chat-info">

            <div className='chat-image'>
                <img src={self_image} alt="chat_image" />
            </div>

            <div className='chat-details'>
                <span>Sujal Jaiswal</span>
                <p>How are you?</p>
            </div>


        </div>


        <div className="chat-info">

            <div className='chat-image'>
                <img src={self_image} alt="chat_image" />
            </div>

            <div className='chat-details'>
                <span>Sujal Jaiswal</span>
                <p>How are you?</p>
            </div>


        </div>


        <div className="chat-info">

            <div className='chat-image'>
                <img src={self_image} alt="chat_image" />
            </div>

            <div className='chat-details'>
                <span>Sujal Jaiswal</span>
                <p>How are you?</p>
            </div>


        </div>

        
    </div>
  )
}

export default Chats