import React from 'react'
import { useEffect,useState } from 'react'
import { supabase } from '../client'
import './pages.css'
import HobbyList from '../components/HobbyList'
const Home = () => {
    const [hobbies,setHobbies] = useState([])
    const [input,setInput] = useState("");
    const [searchedPosts,setSearchedPosts] = useState([])
    const [orderBy,setOrderBy] = useState("")

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
      
      const {data} = await  supabase.from("Hobbies").select().order(attr, { ascending: false });;
      setHobbies(data)
      setOrderBy(attr)
      
      

    }
    
    const searchForPost = () => {
      const result = hobbies.reduce((acc,hobby) => {
        if (hobby.title.toLoweCase().includes(input.toLowerCase())) {
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
        <button onClick={()=>sortBy("likes")} className='custom-button' >Likes</button>
        <button onClick={()=>sortBy("created_at")} className='custom-button' >Newest</button>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          {
            input == ""? 
            <HobbyList
            list={hobbies} /> :
            <HobbyList
            list={searchedPosts} />
          }
        </div> 
    </div>
  )
}

export default Home
