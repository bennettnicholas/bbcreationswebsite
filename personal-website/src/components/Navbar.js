import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo">
                       Nicholas Bennett <i class="fas fa-level-up-alt"></i>
                   </Link>
               </div>
           </nav>
        </>
    )
}

export default Navbar
