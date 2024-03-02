import React from 'react'
import "./NavBarHome.css"
import { Link, useNavigate } from 'react-router-dom'

const NavBarHome = () => {

    const navigate=useNavigate()
    return (
        <>

            <nav className='navbar'>
                <Link to='/home' className='navbar-logo' >
                    <div className="logo-nav">
                        <p title="StudApp">StudApp</p>
                    </div>
                </Link>
                <div className='menu-icon' onClick={()=>navigate("/profile")}>
                    <i className='bx bx-user-circle' style={{fontSize:"2rem",marginTop:"8px"}}></i>
                </div>
            </nav>

        </>
    )
}

export default NavBarHome