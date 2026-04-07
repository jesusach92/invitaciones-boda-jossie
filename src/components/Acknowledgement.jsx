import React from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'

const Acknowledgement = () => {
  const imgHouse = useInViewAnimation({}, true)
  return (
    <section className="acknowledgement">
      <div className="acknowledgement-container">
        <div className='font-cinzel secondary-color' style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 700 }}>Gracias por
          <br />acompañarnos en
          <br />este día tan
          <br />especial</div>
        <div className="corazon-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ fill: '#f0a6a3', width: '64px' }}>
            <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" /></svg>
        </div>
        <img ref={imgHouse.ref} src="/assets/Acknowledgement/images/house.png" alt="house" className={`opacity-0 ${imgHouse.isVisible ? 'animate-slide-left' : ''} ack-image-decor`} />
        <img src="/assets/Acknowledgement/images/copo.png" alt="copo" className="ack-decor left" />
        <img src="/assets/Acknowledgement/images/copo.png" alt="copo" className="ack-decor right" />
      </div>
    </section>
  )
}

export default Acknowledgement