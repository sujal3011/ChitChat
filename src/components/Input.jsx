import React from 'react'
import input_file_icon from '../assets/input_file_icon.png'

const Input = () => {
  return (
    <div className='chat-input-box'>

      <input type="text" className="chat-input" placeholder="Enter your message here"/>
      <input type="file" id="inputfile" style={{display:"none"}}/>
      <label htmlFor="inputfile">
        <img src={input_file_icon} alt="input_file_icon" />
      </label>
      <button className='send-button'>Send</button>
    </div>
  )

}

export default Input