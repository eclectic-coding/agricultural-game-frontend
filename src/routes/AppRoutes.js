import React from 'react'
import { Router } from '@reach/router';
import Home from '../components/Home';



const AppRoutes = ({ games }) => {
  return (
    <Router>
      <Home games={games} path='/' />
    </Router>
  )
}

export default AppRoutes
