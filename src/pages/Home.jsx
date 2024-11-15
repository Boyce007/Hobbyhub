import React from 'react'
import { useEffect,useState } from 'react'
import { supabase } from '../client'
import './pages.css'
import HobbyList from '../components/HobbyList'
const Home = () => {
    const [hobbies,setHobbies] = useState([])
    const [input,setInput] = useState("");
    const [searchedPosts,setSearchedPosts] = useState([])
    const [orderBy,setOrderBy] = useState("");

    const handleChange = (e) => {
      setInput(e.target.value)
    }
    useEffect(()=> {
        const fetchHobbies = async () => {
            const {data} = await supabase
            .from("Hobbies")
            .select()
            setHobbies(data)
          }
          fetchHobbies();
        
    },[orderBy])

    const sortBy = async (attr) => {
      setOrderBy(attr)
      const {data} = await  supabase.from("Hobbies").select().order(orderBy, { ascending: false });
      setHobbies(data)

    }
    
    const searchForPost = () => {
      const result = hobbies.reduce((acc,hobby) => {
        if (hobby.title.toLoweCase() == input.toLowerCase) {
          acc.push(hobby)

        }
      },[])
      setSearchedPosts(result);
    }



  return (
    <div>
      <form onSubmit={searchForPost}>
          <input
          type="text"
          placeholder='Search'
          onChange={handleChange}
          value={input}
          style={{borderRadius:"5px",width:"100vh"}}
          />
        </form>
      <div>
        Order By:
        <button className='custom-button' >Likes</button>
        <button  className='custom-button' >Newest</button>
      </div>
        {
        input == ""? 
        <HobbyList
        list={hobbies} /> :
        <HobbyList
        list={searchedPosts} />
        }
    </div>
  )
}

export default Home
