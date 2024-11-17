import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { supabase } from '../client';
import HobbyForm from '../components/HobbyForm';
const UpdateHobby = () => {
  const {id} = useParams();
  const [hobby,setHobby] = useState({})
  const updatehobby = async (e) => {
        e.preventDefault();
        await supabase
        .from("Hobbies")
        .update({title:hobby.title,image:hobby.image,content:hobby.content})
        .eq('id',id)
        window.location = "/";
  }

  const deletePost = async (e)=> {
    e.preventDefault();
    await supabase
    .from("Hobbies")
    .delete()
    .eq("id",id)
    window.location = "/"
    alert("You successfully deleted The post ")
  }
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <h1>Update A Post</h1>
      <HobbyForm
      handleSubmit={updatehobby}
      submitButtonName={"Update Post"}
      setHobbyValue={setHobby}
      
      />
      <button onClick={deletePost} style={{display:"flex",margin:"20px",backgroundColor:"#F88379"}}>Delete</button>
      
    </div>
  )
}

export default UpdateHobby
