import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div class="navbar">
    <img src="./logo-nav-oneko-padding.png" alt=""/>
    <ul>
        <li><Link to='/' > Download  </Link></li>
        <li><Link to='/plugins'> Plugin's</Link></li>
        <li><Link to='/about' > About  </Link></li>
        <li><Link to='/cloud' > Cloud  </Link></li>

    </ul>
</div>
  )
}

export default Navbar