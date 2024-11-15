import React from 'react'
import HobbyListItem from './HobbyListItem'
import { Link } from 'react-router-dom'
const HobbyList = ({list}) => {
  return (
    <div>
        {
      list.map(item=>(
          <Link
          key={item.id}
          to={`/hobby/${item.id}`}

          style={{textDecoration:"none" ,color:"black" }}
          >
              <HobbyListItem
              key={item.id}
              title={item.title}
              likes={item.likes}
              timePosted={item.created_at}
              />
            </Link>
        ))
    }
    </div>
  )
}

export default HobbyList
