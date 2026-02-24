import CountdownComponent from './common/CountdownComponent';
import { useInViewAnimation } from './hooks/useInViewAnimation';

export default function Countdown() {
  const animation1 = useInViewAnimation({ order: 1 }, true)
  const animation2 = useInViewAnimation({ order: 2, stepDelay: 300 }, true)
  const animation3 = useInViewAnimation({ order: 3, stepDelay: 300 }, true)
  const animation4 = useInViewAnimation({ order: 4, stepDelay: 300 }, true)

  return (
    <section className="countdown">
      <div className='countdown-container'>
        <img ref={animation1.ref} src="/assets/Countdown/count-down-tiitle.png" alt="" className={`opacity-0 ${animation1.isVisible ? 'animate-appers' : ''} font-vladimir font-lg countdown-title`} />
        <img ref={animation2.ref} src="/assets/Countdown/count-down-subtitle.png" alt="" className={`opacity-0 ${animation2.isVisible ? 'animate-appers' : ''} font-vladimir font-md countdown-subtitle`} />
        <br />
        <div ref={animation3.ref} className={`opacity-0 ${animation3.isVisible ? 'animate-appers' : ''} font-vladimir font-lg component-container`} >
          <CountdownComponent targetDate={'2026-08-22T14:30:00'} />
        </div>
        <div className='decor-container'>
          <img ref={animation4.ref} src="/assets/Countdown/count-down-image.png" alt="" className={`opacity-0 ${animation4.isVisible ? 'animate-appers' : ''} countdown-image`} />
        </div>
      </div>
    </section>
  );
}
