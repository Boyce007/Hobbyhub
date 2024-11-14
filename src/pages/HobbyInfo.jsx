import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { getTimeSince } from '../client'
import { supabase } from '../client'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
const HobbyInfo = () => {
  const {id} = useParams();
  const [hobby,setHobby] = useState({})
  const [hobbyLikes, setHobbyLikes] = useState(0); 

  useEffect(()=>{
    const fetchHobby = async()=> {
      const {data} = await supabase
      .from('Hobbies')
      .select()
      .eq('id',id)
      setHobby(data[0])

      const { data: likesData } = await supabase
      .from('Hobbies')
      .select("likes")
      .eq("id", id);

    if (likesData && likesData.length > 0) {
      setHobbyLikes(likesData[0].likes);
    }
    
    };
    fetchHobby();
  },[])
  

  
  
  
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
      {hobbyLikes}


    </div>
  )
}

export default HobbyInfo
