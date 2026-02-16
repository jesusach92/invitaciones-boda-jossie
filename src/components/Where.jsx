import '../styles/styles.css';
import { useInViewAnimation } from './hooks/useInViewAnimation'

const Where = () => {
     const animations = [
          useInViewAnimation({ order: 1, stepDelay: 0 }, true),
          useInViewAnimation({ order: 2, stepDelay: 500 }, true),
          useInViewAnimation({ order: 3, stepDelay: 500 }, true),
          useInViewAnimation({ order: 4, stepDelay: 500 }, true),
          useInViewAnimation({ order: 5, stepDelay: 500 }, true),
          useInViewAnimation({ order: 6, stepDelay: 500 }, true),
     ]
     return (
          <section className='where'>
               <div className='where-container'>
                    <img ref={animations[0].ref} src="/assets/Where/title-where.png" alt="" className={`opacity-0 ${animations[0].isVisible ? 'animate-slide-down' : ''}`} />
                    <img ref={animations[1].ref} src="/assets/Where/image-where.png" alt="" className={`opacity-0 ${animations[1].isVisible ? 'animate-slide-down' : ''}`} />
                    <img ref={animations[2].ref} src="/assets/Where/subtitle-where.png" alt="" className={`opacity-0 ${animations[2].isVisible ? 'animate-slide-down' : ''}`} />
                    <img ref={animations[3].ref} src="/assets/Where/text-where.png" alt="" className={`opacity-0 ${animations[3].isVisible ? 'animate-slide-down' : ''}`} />
                    <img ref={animations[4].ref} src="/assets/Where/text-where_1.png" alt="" className={`opacity-0 ${animations[4].isVisible ? 'animate-slide-down' : ''}`} />
                    <img ref={animations[5].ref} src="/assets/Where/button-where.png" alt="" className={`opacity-0 ${animations[5].isVisible ? 'animate-slide-down' : ''}`} />
               </div>


          </section>
     )
}

export default Where;