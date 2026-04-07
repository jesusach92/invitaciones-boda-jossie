import React from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'

const Agenda = () => {
    const animations = [
        useInViewAnimation({ order: 1, stepDelay: 0, threshold: 0.8 }, true),
        useInViewAnimation({ order: 2, stepDelay: 200 }, true),
        useInViewAnimation({ order: 3, stepDelay: 200 }, true),
        useInViewAnimation({ order: 4, stepDelay: 200 }, true),
        useInViewAnimation({ order: 5, stepDelay: 200 }, true),
        useInViewAnimation({ order: 6, stepDelay: 200 }, true),
        useInViewAnimation({ order: 7, stepDelay: 200 }, true),
        useInViewAnimation({ order: 8, stepDelay: 200 }, true),
        useInViewAnimation({ order: 9, stepDelay: 200 }, true),
    ]


    return (
        <section className="agenda">
            <div className='agenda-container'>
                <img
                    ref={animations[0].ref}
                    src="/assets/Agenda/title.png"
                    alt="Wedding Timeline"
                    className={`opacity-0 ${animations[0].isVisible ? 'animate-slide-down' : ''} 
                timeline-title`}
                />
                <div className="timeline-grid">
                    <div />
                    <img ref={animations[1].ref} src="/assets/Agenda/reception.png" className={`opacity-0 ${animations[1].isVisible ? 'animate-slide-left' : ''} 
                event left`} />

                    <img ref={animations[2].ref} src="/assets/Agenda/ceremony.png" className={`opacity-0 ${animations[2].isVisible ? 'animate-slide-right' : ''}
                 event right`} />
                    <div />

                    <div />
                    <img ref={animations[3].ref} src="/assets/Agenda/cocktail.png" className={`opacity-0 ${animations[3].isVisible ? 'animate-slide-left' : ''} 
                event left`} />


                    <img ref={animations[4].ref} src="/assets/Agenda/dinner.png" className={`opacity-0 ${animations[4].isVisible ? 'animate-slide-right' : ''}
                 event right`} />
                    <div />

                    <div />
                    <img ref={animations[5].ref} src="/assets/Agenda/vals.png" className={`opacity-0 ${animations[5].isVisible ? 'animate-slide-left' : ''} 
                event left`} />


                    <img ref={animations[6].ref} src="/assets/Agenda/dance.png" className={`opacity-0 ${animations[6].isVisible ? 'animate-slide-right' : ''}
                 event right`} />
                    <div />

                    <div />
                    <img ref={animations[7].ref} src="/assets/Agenda/end.png" className={`opacity-0 ${animations[7].isVisible ? 'animate-slide-left' : ''} event left`} />
                </div>

                <img
                    ref={animations[8].ref}
                    src="/assets/Agenda/decor.png"
                    alt="Gazebo"
                    className={`opacity-0 ${animations[8].isVisible ? 'animate-appers' : ''}
                 timeline-footer`}
                />
            </div>

        </section>
    );
}

export default Agenda



