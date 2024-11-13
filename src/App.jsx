import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreateHobby from './pages/CreateHobby'
import HobbyInfo from './pages/HobbyInfo'
import UpdateHobby from './pages/UpdateHobby'
import { Link } from 'react-router-dom'
function App() {

  let element = useRoutes([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/create',
      element:<CreateHobby/>
    },
    {
      path:"/hobbyInfo",
      element:<HobbyInfo/>
    },
    {
      path:'update',
      element:<UpdateHobby/>
    }

  ])

  return (
   
    <div >
      <p style={{ margin: 0, position: "absolute", left: 0,marginLeft:"10px" }}>Hobby Hub </p>
      <div className='nav-container'>
        
        <Link
        to='/'
        className='custom-link'>
            Home
        </Link>
        <Link to="/create" className='custom-link'> Create a Post</Link>
      </div>
      {element}
    </div>
    

    
  )
}

export default App
