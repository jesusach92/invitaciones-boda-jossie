import React from 'react'
import Slider from '../../../../baby-majo/src/components/common/Slider'

const Places = ({ onClose }) => {
    const places = [
        {
            link: 'https://www.google.com/maps/place/Parque+Nacional+Los+Glaciares/@-50.4949278,-73.0795593,17z/data=!3m1!4b1!4m5!3m4!1s0xb9c9e7a2c0fbbd9:0x1c8e6b8e5a7c8e7!8m2!3d-50.4949278!4d-73.0773706?hl=es',
            image: '/assets/Suggestions/places/option 1.png'
        },
        {
            link: 'https://www.google.com/maps/place/Parque+Nacional+Los+Glaciares/@-50.4949278,-73.0795593,17z/data=!3m1!4b1!4m5!3m4!1s0xb9c9e7a2c0fbbd9:0x1c8e6b8e5a7c8e7!8m2!3d-50.4949278!4d-73.0773706?hl=es',
            image: '/assets/Suggestions/places/option 2.png'
        },
        {
            link: 'https://www.google.com/maps/place/Parque+Nacional+Los+Glaciares/@-50.4949278,-73.0795593,17z/data=!3m1!4b1!4m5!3m4!1s0xb9c9e7a2c0fbbd9:0x1c8e6b8e5a7c8e7!8m2!3d-50.4949278!4d-73.0773706?hl=es',
            image: '/assets/Suggestions/places/option 3.png'
        },
        {
            link: 'https://www.google.com/maps/place/Parque+Nacional+Los+Glaciares/@-50.4949278,-73.0795593,17z/data=!3m1!4b1!4m5!3m4!1s0xb9c9e7a2c0fbbd9:0x1c8e6b8e5a7c8e7!8m2!3d-50.4949278!4d-73.0773706?hl=es',
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