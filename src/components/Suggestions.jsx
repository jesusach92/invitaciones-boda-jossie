import React, { useState } from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'
import Modal from './common/Modal'
import Accomodations from './common/Accomodations'
import Places from './common/Places'

const Suggestions = () => {
    const [showAccomodations, setShowAccomodations] = useState(false)
    const [showPlaces, setShowPlaces] = useState(false)
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
                <div className="suggestions-description-container">
                    <img ref={animations[1].ref} src="/assets/Suggestions/description.png" alt="" className={`opacity-0 ${animations[1].isVisible ? 'animate-appers' : ''} description`} />
                </div>
                <div className="suggestions-decor-container">
                    <img ref={animations[2].ref} src="/assets/Suggestions/accomodation.png" alt="" className={`opacity-0 ${animations[2].isVisible ? 'animate-appers' : ''} suggestions-decor-image`} onClick={() => {
                        setShowAccomodations(true)
                    }} />
                    <img ref={animations[3].ref} src="/assets/Suggestions/places.png" alt="" className={`opacity-0 ${animations[3].isVisible ? 'animate-appers' : ''} suggestions-decor-image`} onClick={() => {

                        setShowPlaces(true)
                    }} />
                </div>
                {(showAccomodations || showPlaces) && <div className="suggestions-modal">
                    {showAccomodations && <Modal >
                        <Accomodations onClose={() => setShowAccomodations(false)} />
                    </Modal>}
                    {showPlaces && <Modal >
                        <Places onClose={() => setShowPlaces(false)} />
                    </Modal>}
                </div>}
            </div>
        </section>
    )
}

export default Suggestions