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
  return (
    <div>
      <HobbyForm
      handleSubmit={updatehobby}
      submitButtonName={"Update Post"}
      setHobbyValue={setHobby}
      
      
      />
    </div>
  )
}

export default UpdateHobby
