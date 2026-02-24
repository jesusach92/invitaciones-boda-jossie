import React from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'

const Dresscode = () => {

  const animations = [
    useInViewAnimation({ order: 1, stepDelay: 0 }, true),
    useInViewAnimation({ order: 2, stepDelay: 300 }, true),
    useInViewAnimation({ order: 3, stepDelay: 300 }, true),
    useInViewAnimation({ order: 4, stepDelay: 300 }, true),
    useInViewAnimation({ order: 5, stepDelay: 300 }, true),
    useInViewAnimation({ order: 6, stepDelay: 300 }, true),
  ]

  return (
    <section className='dresscode'>
      <div className="dresscode-container">
        <div className='title-section'>
          <img ref={animations[0].ref} src="/assets/Dresscode/title_1.png" alt="" className={`opacity-0 ${animations[0].isVisible ? 'animate-appers' : ''} title-element_1`} />
          <img ref={animations[1].ref} src="/assets/Dresscode/title_2.png" alt="" className={`opacity-0 ${animations[1].isVisible ? 'animate-appers' : ''} title-element_2`} />
        </div>
        <div className='description-section'>
          <img ref={animations[2].ref} src="/assets/Dresscode/subtitle.png" alt="" className={`opacity-0 ${animations[2].isVisible ? 'animate-appers' : ''} dresscode-description`} />
          <img ref={animations[3].ref} src="/assets/Dresscode/description.png" alt="" className={`opacity-0 ${animations[3].isVisible ? 'animate-appers' : ''} dresscode-description-2`} />
        </div>
        <div className='decor-section'>
          <img ref={animations[4].ref} src="/assets/Dresscode/gentleman.png" alt="" className={`opacity-0 ${animations[4].isVisible ? 'animate-appers' : ''} dresscode-decors`} />
          <img ref={animations[5].ref} src="/assets/Dresscode/lady.png" alt="" className={`opacity-0 ${animations[5].isVisible ? 'animate-appers' : ''} dresscode-decors lady`} />
        </div>
      </div>
    </section>
  )
}

export default Dresscode