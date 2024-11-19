import React from 'react'
import { useState } from 'react'
import { supabase } from '../client'
import HobbyForm from '../components/HobbyForm'
const CreateHobby = () => {
    const [hobby,setHobby] = useState({title:"",likes:0,content:"",comments:[],image:""})

    const createHobby = async (e) => {
        e.preventDefault();
        await supabase
        .from("Hobbies")
        .insert({title:hobby.title,content:hobby.content,image:hobby.image})
        .select();
        window.location = "/";      
    }

  return (
    <div>
      <HobbyForm
      handleSubmit={createHobby}
      submitButtonName={"Create Post"}
      setHobbyValue={setHobby}
      
      />
      
    </div>
  )
}

export default CreateHobby
