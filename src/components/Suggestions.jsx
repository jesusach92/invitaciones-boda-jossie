import React from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'

const Suggestions = () => {
    const animations = [
        useInViewAnimation({ order: 1, stepDelay: 0 }, true),
        useInViewAnimation({ order: 2, stepDelay: 300 }, true),
        useInViewAnimation({ order: 3, stepDelay: 300 }, true),
        useInViewAnimation({ order: 4, stepDelay: 300 }, true),

    ]
    return (
        <section className="suggestions">
            <div className="suggestions-container">
                <div className="title-container">
                    <img ref={animations[0].ref} src="/assets/Suggestions/title.png" alt="" className={`opacity-0 ${animations[0].isVisible ? 'animate-appers' : ''} title`} />
                </div>
                <div className="description-container">
                    <img ref={animations[1].ref} src="/assets/Suggestions/description.png" alt="" className={`opacity-0 ${animations[1].isVisible ? 'animate-appers' : ''} description`} />
                </div>
                <div className="decor-container">
                    <img ref={animations[2].ref} src="/assets/Suggestions/accomodation.png" alt="" className={`opacity-0 ${animations[2].isVisible ? 'animate-appers' : ''} decor-image`} />
                    <img ref={animations[3].ref} src="/assets/Suggestions/places.png" alt="" className={`opacity-0 ${animations[3].isVisible ? 'animate-appers' : ''} decor-image`} />
                </div>
            </div>
        </section>
    )
}

export default Suggestions