import React from 'react'
import "./NavBarHome.css"
import { Link } from 'react-router-dom'

const NavBarHome = () => {
    return (
        <>

            <nav className='navbar'>
                <Link to='/' className='navbar-logo' >
                    <div className="logo-nav">
                        <p title="StudApp">StudApp</p>
                    </div>
                </Link>
                <div className='menu-icon'>
                    <i className='bx bx-user-circle' style={{fontSize:"2rem",marginTop:"8px"}}></i>
                </div>
            </nav>

        </>
    )
}

export default NavBarHome