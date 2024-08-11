import React from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (

    <div className='navbar'>
      <img className='logo' src={assets.burger_logo} alt="" />
      <p className="admin-title">Admin Panel</p>
      <img className='profile' src={assets.nerd_image} alt="" />
      </div>
      
  )
}

export default Navbar;