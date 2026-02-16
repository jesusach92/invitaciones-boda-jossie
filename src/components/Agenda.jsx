import React from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'

const Agenda = () => {
    const animation1 = useInViewAnimation({ order: 1 }, true)
    const animation2 = useInViewAnimation({ order: 2, stepDelay: 500 }, true)
    const animation3 = useInViewAnimation({ order: 3, stepDelay: 500 }, true)
    const animation4 = useInViewAnimation({ order: 4, stepDelay: 500 }, true)

    return (
        <section className="agenda-container">

            <img
                src="/assets/Agenda/title.png"
                alt="Wedding Timeline"
                className="timeline-title"
            />
            <div className="timeline-grid">
                <div />
                <img src="/assets/Agenda/reception.png" className="event left" />

                <img src="/assets/Agenda/ceremony.png" className="event right" />
                <div />

                <div />
                <img src="/assets/Agenda/cocktail.png" className="event left" />


                <img src="/assets/Agenda/dinner.png" className="event right" />
                <div />

                <div />
                <img src="/assets/Agenda/vals.png" className="event left" />


                <img src="/assets/Agenda/dance.png" className="event right" />
                <div />

                <div />

                <img src="/assets/Agenda/end.png" className="event left" />
            </div>

            <img
                src="/assets/Agenda/decor.png"
                alt="Gazebo"
                className="timeline-footer"
            />
        </section>
    );
}

export default Agenda



