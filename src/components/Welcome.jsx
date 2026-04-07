import { useInViewAnimation } from "./hooks/useInViewAnimation";

export default function Welcome() {
  const imgVenado = useInViewAnimation({}, true)
  return (
    <section className="welcome" >
      <div className="welcome-section">
        <div className="font-cinzel font-lg secondary-color">Diciembre</div>
        <div className="welcome-date-container">
          <div className="font-cinzel font-lg secondary-color borders">sábado</div>
          <div className="font-cinzel font-xl primary-color">06</div>
          <div className="font-cinzel font-lg secondary-color borders">02:30 PM</div>
        </div>
        <div className="font-cinzel font-lg secondary-color">
          2025
        </div>
      </div>
      <div className="welcome-message">
        <div className="font-bell secondary-color font-md">A ti fui entregado desde la matriz,
          <br />desde el vientre de mi madre,
          <br />Tú eres mi Dios
        </div>
        <div className="font-bell secondary-color font-md">Salmos 22:10</div>
      </div>
      <img src="/assets/Welcome/copo1.png" alt="" className="image-decor center-right" />
      <img src="/assets/Welcome/copo2.png" alt="" className="image-decor top-left" />
      <img src="/assets/Welcome/copo3.png" alt="" className="image-decor center-center" />
      <img src="/assets/Welcome/copo3.png" alt="" className="image-decor bottom-left" />
      <img src="/assets/Welcome/star.png" alt="" className="image-decor top-left down" />
      <img src="/assets/Welcome/star.png" alt="" className="image-decor top-right" />
      <img src="/assets/Welcome/star2.png" alt="" className="image-decor top-center" />
      <img src="/assets/Welcome/star2.png" alt="" className="image-decor center-left" />
      <img src="/assets/Welcome/star2.png" alt="" className="image-decor center-right up" />
      <img ref={imgVenado.ref} src="/assets/Welcome/venadito.png" alt="" className={`opacity-0 ${imgVenado.isVisible ? 'animate-slide-left' : ''}  image-decor bottom-right`} />
    </section>
  );
}
