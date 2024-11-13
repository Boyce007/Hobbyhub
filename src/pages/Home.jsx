import React from 'react'
import { useEffect,useState } from 'react'
import { supabase } from '../client'
import HobbyListItem from '../components/HobbyListItem'
import './pages.css'
const Home = () => {
    const [hobbies,setHobbies] = useState([])
    useEffect(()=> {
        const fetchHobbies = async () => {
            const {data} = await supabase
            .from("Hobbies")
            .select()
            setHobbies(data)
          }
          fetchHobbies();
        
    },[])
  return (
    <div>
      <div>
        Order By:
        <button className='custom-button' >Likes</button>
        <button className='custom-button' >Newest</button>
      </div>
      {
        hobbies.map(hobby=>(
            <HobbyListItem
            key={hobby.id}
            title={hobby.title}
            likes={hobby.likes}
            timePosted={hobby.created_at}
            />
        ))
        }
    </div>
  )
}

export default Home
