import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getTimeSince } from '../client'
import { supabase } from '../client'
import './pages.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
const HobbyInfo = () => {
  const {id} = useParams();
  const [hobby,setHobby] = useState({})
  const [hobbyLikes, setHobbyLikes] = useState(0); 
  const [comments,setComments] = useState([]);
  const [input,setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value)
  }
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

  useEffect(()=> {
    const fetchComments = async() => {
      const {data} = await supabase
      .from('Hobbies')
      .select("comments")
      .eq("id",id)
      setComments(data[0].comments)
    }
    fetchComments();

  },[comments])

  // const leaveAComment  = async()=> {
  //   const {data} = await supabase
  //   .from("Hobbies")
  //   .update

  // }
  

  
  
  
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
      <div className='like-button-container'>

        <button style={{backgroundColor:"white",marginRight:"10px"}} onClick={likePost}>
          <ThumbUpOffAltIcon />
        </button>
        <p>{hobbyLikes}</p>
      </div>
      <div style={{margin:"10px",backgroundColor:"lightgrey",display:'flex',flexDirection:"column",width:"100vh",alignItems:"flex-start",gap:"1px",fontSize:"12px"}}>
            {
            comments.map(comment=>(
                <p key={comment} style={{marginLeft:"10px",marginBottom:"0px",marginTop:"5px"}} >
                - {comment}
              </p>
            ))
            }
          
        <input
        type="text"
        placeholder='Leave a comment...'
        value={input}
        onChange={handleChange}
        style={{width:"99vh"}}
         />
      </div>


    </div>
  )
}

export default HobbyInfo
