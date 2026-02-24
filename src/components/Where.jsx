import '../styles/styles.css';
import { useInViewAnimation } from './hooks/useInViewAnimation'

const Where = () => {
     const animations = [
          useInViewAnimation({ order: 1, stepDelay: 0 }, true),
          useInViewAnimation({ order: 2, stepDelay: 300 }, true),
          useInViewAnimation({ order: 3, stepDelay: 300 }, true),
          useInViewAnimation({ order: 4, stepDelay: 300 }, true),
          useInViewAnimation({ order: 5, stepDelay: 300 }, true),
          useInViewAnimation({ order: 6, stepDelay: 300 }, true),
     ]
     return (
          <section className='where'>
               <div className='where-container'>
                    <img ref={animations[0].ref} src="/assets/Where/title-where.png" alt="" className={`opacity-0 ${animations[0].isVisible ? 'animate-slide-down' : ''} where-title`} />
                    <img ref={animations[1].ref} src="/assets/Where/image-where.png" alt="" className={`opacity-0 ${animations[1].isVisible ? 'animate-slide-down' : ''} where-image`} />
                    <img ref={animations[2].ref} src="/assets/Where/subtitle-where.png" alt="" className={`opacity-0 ${animations[2].isVisible ? 'animate-slide-down' : ''} where-subtitle`} />
                    <img ref={animations[3].ref} src="/assets/Where/text-where.png" alt="" className={`opacity-0 ${animations[3].isVisible ? 'animate-slide-down' : ''} where-text`} />
                    <img ref={animations[4].ref} src="/assets/Where/text-where_1.png" alt="" className={`opacity-0 ${animations[4].isVisible ? 'animate-slide-down' : ''} where-text-2`} />
                    <a href="https://maps.app.goo.gl/F44pqGJpGUvzuAiS8" target="_blank" rel="noopener noreferrer">
                         <img ref={animations[5].ref} src="/assets/Where/button-where.png" alt="" className={`opacity-0 ${animations[5].isVisible ? 'animate-slide-down' : ''} where-button`} />
                    </a>

               </div>


          </section>
     )
}

export default Where;