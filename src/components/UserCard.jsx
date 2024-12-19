import React from 'react'
import me from '../assets/me.jpg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.img} alt="img" />
      <p id='user-email'>hasanzaidi@gmail.com</p>
      <p id='user-id'>+91-9335743731</p>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
