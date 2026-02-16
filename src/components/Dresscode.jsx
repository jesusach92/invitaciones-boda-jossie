import React from 'react'
// import { useInViewAnimation } from './hooks/useInViewAnimation'

const Dresscode = () => {


  return (
    <section className='dresscode'>
      <div className="dresscode-container">
        <div className='title-section'>
          <img src="/assets/Dresscode/title_1.png" alt="" className="title-element_1" />
          <img src="/assets/Dresscode/title_2.png" alt="" className="title-element_2" />
        </div>
        <div className='description-section'>
          <img src="/assets/Dresscode/subtitle.png" alt="" className="dresscode-decription" />
          <img src="/assets/Dresscode/description.png" alt="" className="dresscode-decription" />
        </div>
        <div className='decor-section'>
          <img src="/assets/Dresscode/gentleman.png" alt="" className="dresscode-decors" />
          <img src="/assets/Dresscode/lady.png" alt="" className="dresscode-decors" />
        </div>
      </div>
    </section>
  )
}

export default Dresscode