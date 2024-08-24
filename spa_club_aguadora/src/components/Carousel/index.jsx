import { useEffect, useState } from 'react';
import './Carousel.css'; // Archivo para estilos adicionales
import { MEDIA_PATHS } from '../../Utils/Writers';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = MEDIA_PATHS.HOME.CAROUSEL;
  // Cambia de slide automáticamente cada 40 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 40 segundos en milisegundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden w-full max-w-[100%]  mx-auto">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full flex py-6">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-[600px] h-[500px] pl-16"
              />
            <div className="w-[65%] h-44 p-4 flex flex-col gap-y-4">
              <h3 className="font-bold text-6xl uppercase text-primary-400 ">{slide.title}</h3>
              <p className="text-xl pl-32 font-medium text-primary-950 w-[70%]">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
