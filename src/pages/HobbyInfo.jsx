import React from 'react'
import { useLocation,useParams } from 'react-router-dom'
import { useState } from 'react'
import { getTimeSince } from '../client'
import { supabase } from '../client'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
const HobbyInfo = () => {
  const location = useLocation();
  const hobby  = location.state?.h
  const [hobbyLikes,setHobbyLikes] = useState(hobby.likes);
  const likePost = async (e) => {
    e.preventDefault();
    const newlikes = hobbyLikes +1 
    setHobbyLikes(newlikes);
    await supabase
    .from("Hobbies")
    .update({likes:newlikes})
    .eq('id',hobby.id)

  }
  return (
    <div className='info-container'>

      <p>{getTimeSince(hobby.created_at)}</p>
      <h2 >{hobby.title}</h2>
      <p>{hobby.content}</p>
      <img src={hobby.image} alt="test image" />
      <button onClick={likePost}>
        <ThumbUpOffAltIcon />
      </button>
      {hobbyLikes}


    </div>
  )
}

export default HobbyInfo
