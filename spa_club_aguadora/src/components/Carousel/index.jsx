import { useEffect, useState } from "react";
import "./Carousel.css"; // Archivo para estilos adicionales
import { MEDIA_PATHS } from "../../Utils/Writers";

export const Carousel = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const SLIDES = MEDIA_PATHS.HOME.CAROUSEL;
   // Cambia de slide automáticamente cada 40 segundos
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) =>
            prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1
         );
      }, 10000); // 40 segundos en milisegundos

      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
   }, [SLIDES.length]);

   return (
      <div className="relative overflow-hidden w-full max-w-[100%] mx-auto h-[70vh] shadow-lg">
         <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {SLIDES.map((slide, index) => (
               <div
                  key={index} 
                  className="relative flex-shrink-0 w-full h-screen">
                  <img
                     src={slide.IMAGE}
                     alt={`Slide ${index + 1}`}
                     className="object-cover w-full h-full "
                  />
                  <div className="absolute inset-0 flex flex-col items-center text-center pt-32 text-white bg-black bg-opacity-30">
                     <h3
                        className={`font-bold text-5xl uppercase text-gray-100 transform transition-transform duration-1000 w-[70%] ${
                           currentIndex === index
                              ? "translate-y-10 opacity-100"
                              : "-translate-y-0 opacity-0"
                        }`}>
                        {slide.TITLE}
                     </h3>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};
