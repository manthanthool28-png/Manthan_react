
/*
import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar: React.FC = () => {
return (
<header className="site-header">
<nav className="nav">
<div className="brand"> MT </div>
<ul className="nav-links">
<li><NavLink to="/" end>Home</NavLink></li>
<li><NavLink to="/about">About Me</NavLink></li>
<li><NavLink to="/portfolio">Portfolio</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
</ul>
</nav>
</header>
)
}
export default Navbar
*/


import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <header className="site-header">
      <nav className="nav">
        {/* Logo that swaps to MT on hover */}
        <NavLink to="/" className="brand logo-swap">
          <img src="/logo.png" alt="My Logo" className="logo-img" />
          <span className="logo-text">MT</span>
        </NavLink>

        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
