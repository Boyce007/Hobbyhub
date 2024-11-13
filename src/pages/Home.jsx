import React from 'react'
import { useEffect,useState } from 'react'
import { supabase } from '../client'
import HobbyListItem from '../components/HobbyListItem'
const Home = () => {
    const [hobbies,setHobbies] = useState([])
    useEffect(()=> {
        const fetchHobbies = async () => {
            const {data} = supabase
            .from("Crewmates")
            .select()
            setHobbies(data)
          }
          fetchHobbies();
        
    })
  return (
    <div>
      {
        hobbies.map(hobby=>(
            <HobbyListItem
            key={hobby.id}
            title={}
            />

        ))
      }
    </div>
  )
}

export default Home
