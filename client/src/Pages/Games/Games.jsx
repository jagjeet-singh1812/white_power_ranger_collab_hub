import React from 'react'
import "./Games.css"

const Games = () => {
    return (
        <>

            <div className="sessions-right">
                <div className="game1-flipflop">
                    <p className='sessions-count-heading'>Flip Flop</p>
                </div>
                <div className="game2-tower">
                    <p className='sessions-count-heading'>Tower Block</p>
                </div>
                <div className="game3-baseball">
                    <p className='sessions-count-heading'>BaseBall Math</p>
                </div>
            </div>

        </>
    )
}

export default Games