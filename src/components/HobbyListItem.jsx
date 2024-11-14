import React from 'react'
import { getTimeSince } from '../client';
// eslint-disable-next-line react/prop-types
const HobbyListItem = ({title,likes,timePosted}) => {
  

// Convert the difference to various units


// Displaying the result



  return (
    

    <div className='list-item-container'>
      
        <p style={{color:"GrayText",fontSize:"15px"}}>{getTimeSince(timePosted)}</p>
        <p style={{fontWeight:"bold",fontSize:"20px"}}>{title}</p>
        <p>{likes} Upvotes</p>
    </div>
  )
}

export default HobbyListItem
