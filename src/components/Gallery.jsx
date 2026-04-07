// src/components/GaleriaCarrusel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './common/styles/gallery.css'; // Aquí va tu estilo personalizado

const imagenes = Array.from({ length: 5 }, (_, i) => `/assets/Gallery/image${i}.png`);

function Gallery() {
  return (
    <div className="gallery-container">
      <Swiper
        slidesPerView={'auto'}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
        spaceBetween={30}

      >
        {imagenes.map((src, i) => (
          <SwiperSlide key={i} >
            <div className="imagen-wrapper">
              <img src={src} alt={`Imagen ${i + 1}`} className="imagen" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
