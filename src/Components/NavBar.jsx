import React from 'react'
import Logo from '../Assets/Images/Logo.svg'

const NavBar = () => {
  return (
    <nav className='nav-bar-container'>
      <div className="nav-bar-content">
        <div className='nav-bar-logo-holder'>
          <img src={Logo}/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar