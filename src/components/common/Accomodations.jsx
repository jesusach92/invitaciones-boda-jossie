import React from 'react'

const Accomodations = ({ onClose }) => {



    return (
        <div className="accomodations-container">

            <button onClick={onClose}><img src="/assets/Suggestions/close_buton.png" alt="" /></button>

        </div>
    )
}

export default Accomodations