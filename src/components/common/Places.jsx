import React from 'react'
import Slider from './Slider'

const Places = ({ onClose }) => {
    const places = [
        {
            link: 'https://maps.app.goo.gl/Lcfhd3SJqZBeenpr6',
            image: '/assets/Suggestions/places/option 1.png'
        },
        {
            link: 'https://maps.app.goo.gl/HD7LjZoZu2a18ApNA',
            image: '/assets/Suggestions/places/option 2.png'
        },
        {
            link: 'https://maps.app.goo.gl/wpBE2deQ7DFW2tuz9',
            image: '/assets/Suggestions/places/option 3.png'
        },
        {
            link: 'https://maps.app.goo.gl/rejUppD9e8KDbBs76',
            image: '/assets/Suggestions/places/option 4.png'
        }
    ]
    return (
        <div className="places-container">
            <img src="/assets/Suggestions/places/title.png" alt="" className="places-title" />
            <img src="/assets/Suggestions/places/description.png" alt="" className="places-description" />
            <div className="places-list">
                <Slider items={places} />
            </div>
            <button onClick={onClose} className="places-close-button"><img src="/assets/Suggestions/close_buton.png" alt="" className="places-close-image" /></button>
        </div>

    )
}

export default Places