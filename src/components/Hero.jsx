import { useEffect, useRef } from 'react';
import '../styles/fonts.css';
import '../styles/styles.css';

export default function Hero({ visible = false }) {
  const videoRef = useRef(null);


  useEffect(() => {

    if (visible && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("La autoreproducción fue bloqueada por el navegador:", error);
      });
    }
  }, [visible]);



  return (
    <section className='hero'>
      <div className='hero-container'>

        <video
          ref={videoRef}
          className="video-background"
          muted
          playsInline
          src="/assets/Hero/Wedding of.mp4"
          style={{ borderRadius: '40px', border: '1px solid #bfbdbe' }}
        />

      </div>
    </section>
  );
}
