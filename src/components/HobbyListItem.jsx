import React from 'react'

// eslint-disable-next-line react/prop-types
const HobbyListItem = ({title,likes,timePosted}) => {
  

// Convert the difference to various units


// Displaying the result

const getTimeSince = () => {
  const now = new Date();
  const time = new Date(timePosted)
  const timeDifference = now - time;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else {
    return `${days} days ago`;
  }

}

  return (
    

    <div className='list-item-container'>
      
        <p style={{color:"GrayText",fontSize:"15px"}}>{getTimeSince()}</p>
        <p style={{fontWeight:"bold",fontSize:"20px"}}>{title}</p>
        <p>{likes} Upvotes</p>
    </div>
  )
}

export default HobbyListItem
