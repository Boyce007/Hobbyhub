import React from 'react'

const HobbyListItem = ({title,likes,timePosted}) => {


  return (
    <div className='list-item-container'>
        <p style={{color:"GrayText",fontSize:"15px"}}>{timePosted}</p>
        <p style={{fontWeight:"bold",fontSize:"20px"}}>{title}</p>
        <p>{likes}</p>
    </div>
  )
}

export default HobbyListItem
