import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate=useNavigate()
    return (
        <>

            <div className="sessions-right">
                <div className="total-sessions-count" onClick={()=>navigate("/games")}>
                    <p className='sessions-count-heading'>Games</p>
                </div>
                <div className="upcoming-sessions-count">
                    <p className='sessions-count-heading'>Quiz</p>
                </div>
                <div className="past-sessions-count">
                    <p className='sessions-count-heading'>Courses</p>
                </div>
                <div className="request-sessions-count">
                    <p className='sessions-count-heading'>Community</p>
                </div>
            </div>

            <br></br>
            <br></br>
        </>
    )
}

export default Home