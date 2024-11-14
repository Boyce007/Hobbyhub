import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { getTimeSince } from '../client'

const HobbyInfo = () => {
  const location = useLocation();
  const hobby  = location.state?.h

  return (
    <div className='info-container'>

      <p>{getTimeSince(hobby.created_at)}</p>
      <p style={{fontWeight:"bold",fontSize:"30px"}}>{hobby.title}</p>
      <p>{hobby.content}</p>
      <img src={hobby.image} alt="test image" />
      <button></button>


    </div>
  )
}

export default HobbyInfo
