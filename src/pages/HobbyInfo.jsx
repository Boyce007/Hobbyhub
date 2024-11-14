import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { getTimeSince } from '../client'
import { supabase } from '../client'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
const HobbyInfo = () => {
  const {id} = useParams();
  const [hobby,setHobby] = useState({})
  useEffect(()=>{
    const fetchHobby = async()=> {
      const {data} = await supabase
      .from('Hobbies')
      .select()
      .eq('id',id)
      console.log(data)
      setHobby(data[0])
      console.log(hobby)
    
    }
    fetchHobby();
  },[])

  const fetchLikes = async()=> {
    const {data} = await supabase
    .from('Hobbies')
    .select("likes")
    .eq("id",hobby.id)
    return  data[0].likes
    
  }

  
  
  
  // const [hobbyLikes,setHobbyLikes] =  useState(fetchLikes());
  const likePost = async () => {
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
      {/* {hobbyLikes} */}


    </div>
  )
}

export default HobbyInfo
