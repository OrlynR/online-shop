import React from 'react'
import { Route } from "react-router-dom";
import './style.css'


// Components
const PublicRoute = ({component: Component}) => {
  
  return (
    <Route
        component={(props) =>
            <Component {...props} />
          }
    />

  )
}

export default PublicRoute
