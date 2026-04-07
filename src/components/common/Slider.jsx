import React, { useState } from 'react'

const Slider = ({ items }) => {
    const [current, setCurrent] = useState(0)
    const activeItem = items[current]

    const next = () => {
        setCurrent((prev) => (prev + 1) % items.length)
    }

    const prev = () => {
        setCurrent((prev) => (prev - 1 + items.length) % items.length)
    }

    return (
        <div className="slider-container">
            <div className="slider-card">
                <img
                    src={activeItem.image}
                    alt={activeItem.name}
                    className="slider-image"
                />
                <a
                    href={activeItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slider-button"
                >
                    <img src="/assets/Suggestions/boton.png" alt="" className='slider-button-image' />
                </a>
            </div>
            {items.length > 1 && (
                <div className="slider-controls">
                    <button onClick={prev}>‹</button>
                    <button onClick={next}>›</button>
                </div>
            )}
        </div>
    )
}

export default Slider