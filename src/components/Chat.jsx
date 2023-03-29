import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat-box'>

      <div className="chat-box-header">
        <span>Rajdeep</span>
      </div>

      <Messages/>
      <Input/>



    </div>
  )
}

export default Chat