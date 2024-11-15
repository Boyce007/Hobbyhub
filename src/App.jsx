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
      path:"/hobby/:id",
      element:<HobbyInfo/>
    },
    {
      path:'/hobby/:id/update',
      element:<UpdateHobby/>
    }

  ])

  return (
   
    <div>
      <div style={{ backgroundColor: "#F88379", width: "100%",height: "60px", padding: "10px", position: "fixed", top: 0, left: 0, }}>
        <h3 style={{ margin: 0, position: "absolute", left: 0,marginLeft:"10px",color:"white" }}>Hobby Hub </h3>
        
        <div className='nav-container'>
          <Link
          to='/'
          className='custom-link'>
              Home
          </Link>
          <Link to="/create" className='custom-link' style={{marginRight:'15px'}}> Create a Post</Link>
        </div>
      </div>
      <div className='route-container'>
        {element}
      </div>
    </div>
    

    
  )
}

export default App
