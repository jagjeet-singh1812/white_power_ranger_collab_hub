import React from 'react'
import "./Games.css"
import {Link} from "react-router-dom"
const Games = () => {
    return (
        <>

            <div className="sessions-right">
                <a href="/Game.html">
                <div className="game1-flipflop">
                    <p className='sessions-count-heading'>Flip Flop</p>
                </div>
                </a>
                <a href="/Game2.html">
                <div className="game2-tower">
                    <p className='sessions-count-heading'>Tower Block</p>
                </div>
                </a>
                <div className="game3-baseball">
                    <p className='sessions-count-heading'>BaseBall Math</p>
                </div>
            </div>

        </>
    )
}

export default Games