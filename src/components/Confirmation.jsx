
import { useGuestHook } from './hooks/useGuestHook';
import { useInViewAnimation } from './hooks/useInViewAnimation';


const FormRSVP = (family) => {

  if (!family.message) {
    return (<section className="confirmation font-indie-flower">
      <p>Código no válido o invitación no encontrada</p>
    </section>
    )
  }
  return (
    <section className="form-rsvp">
      <div className="form-container">

      </div>
    </section>
  )
}

const Confirmation = () => {
  const family = useGuestHook();
  const animations = [
    useInViewAnimation(
      { order: 1, stepDelay: 0 }
    ),
    useInViewAnimation({ order: 2, stepDelay: 300 }),
    useInViewAnimation({ order: 3, stepDelay: 300 }),
    useInViewAnimation({ order: 4, stepDelay: 300 }),
  ];


  return (
    <section className="confirmation font-indie-flower" >
      <div className="confirmation-container">
        <div className='confirmation-title'>
          <img ref={animations[0].ref} src="/assets/Confirmation/title.png" alt="" className={`opacity-0 ${animations[0].isVisible ? 'animate-appers' : ''} confirmation-title`} />
        </div>
        <div ref={animations[1].ref} className={`opacity-0 ${animations[1].isVisible ? 'animate-appers' : ''} confirmation-form`}>
          <FormRSVP family={family} />
        </div>
        <div className='confirmation-decor'>
          <img ref={animations[2].ref} src="/assets/Confirmation/decor.png" alt="" className={`opacity-0 ${animations[2].isVisible ? 'animate-appers' : ''} confirmation-decor`} />
        </div>
      </div >

    </section >
  )
}

export default Confirmation