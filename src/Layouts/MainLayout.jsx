import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'

const MainLayout = () => {
  return (
    <div className='mainLayoutContainer'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default MainLayout