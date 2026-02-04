import { useEffect, useRef, useState } from "react";

export function useInViewAnimation({ 
    threshold = 0.2, 
    order = 0,      // Tu nueva propiedad: El orden de ejecución (0, 1, 2...)
    stepDelay = 200, // Tiempo de espera entre cada elemento (ms)
    ...options 
} = {}, canAnimate = true) {
    
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!canAnimate) return;

    let timeoutId;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            
            // AQUI ESTA LA MAGIA:
            // Calculamos el retraso basado en el 'order'
            const delay = order * stepDelay;

            timeoutId = setTimeout(() => {
                setIsVisible(true);
            }, delay);

            // Dejamos de observar inmediatamente para evitar re-triggers
            // pero el estado se actualizará cuando termine el timeout
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
        observer.disconnect();
        // Limpiamos el timeout si el componente se desmonta antes de animar
        if (timeoutId) clearTimeout(timeoutId);
    };
  }, [canAnimate, order, stepDelay, threshold, options]); // Añadimos las dependencias

  return { ref, isVisible };
}