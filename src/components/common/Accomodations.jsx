import React from 'react'
import Slider from './Slider'

const Accomodations = ({ onClose }) => {
    const accomodations = [
        {
            link: 'https://maps.app.goo.gl/1pG7x25sdyBbxBbG8',
            image: '/assets/Suggestions/accomodations/option_1.png'
        },
        {
            link: 'https://maps.app.goo.gl/SvqCsM2ZMaMBcuoK9',
            image: '/assets/Suggestions/accomodations/option_2.png'
        },
        {
            link: 'https://maps.app.goo.gl/9WW4U3tqbwyN5NkN8',
            image: '/assets/Suggestions/accomodations/option_3.png'
        },

    ]
    return (
        <div className="places-container">
            <img src="/assets/Suggestions/accomodations/title.png" alt="" className="places-title" />
            <img src="/assets/Suggestions/accomodations/description.png" alt="" className="places-description" />
            <div className="places-list">
                <Slider items={accomodations} />
            </div>
            <button onClick={onClose} className="places-close-button"><img src="/assets/Suggestions/close_buton.png" alt="" className="places-close-image" /></button>
        </div>

    )
}

export default Accomodations