import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const cities = [
    { name: 'New York', img: 'https://media.istockphoto.com/id/1153849876/es/foto/vista-panor%C3%A1mica-de-los-rascacielos-de-manhattan-por-la-noche-en-navidad-desde-la-zona-de.jpg?s=612x612&w=0&k=20&c=rondqEvk3JcU37itVAFjdiwl7PYBR2Mxk2HXmtjFfKE=' },
    { name: 'Paris', img: 'https://static.vecteezy.com/system/resources/previews/028/295/738/non_2x/eiffel-tower-paris-france-sunrise-generate-ai-photo.jpeg' },
    { name: 'Tokio', img: 'https://st.depositphotos.com/1035350/4144/i/450/depositphotos_41449851-stock-photo-shinjuku-tokyo.jpg' },
    { name: 'Seoul', img: 'https://static.toiimg.com/thumb/111258523/Seoul-South-Korea.jpg?width=1200&height=900' },
    { name: 'London', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=1400&h=1400&s=1' },
    { name: 'Barcelona', img: 'https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg'},
    { name: 'Berlin', img: 'https://viajes.nationalgeographic.com.es/medio/2017/02/09/shutterstock-302415089_6b607cdb.jpg' },
    { name: 'Rome', img: 'https://tourismmedia.italia.it/is/image/mitur/1600X1000_storia_e_curiosita_su_roma_1-2?wid=800&hei=500&fit=constrain,1&fmt=webp' },
    { name: 'Buenos Aires', img: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/03201757/Ciudades-mas-caras-de-America-Latina-Buenos-Aires.jpg' },
    { name: 'Sydney', img: 'https://fotografias.larazon.es/clipping/cmsimages02/2019/08/07/4DA2DAB5-8E42-4872-A15A-4EA75C9CB7F9/98.jpg?crop=1031,580,x0,y50&width=1900&height=1069&optimize=low&format=webply' },
    { name: 'Dubai', img: 'https://media-cdn.tripadvisor.com/media/photo-s/18/66/dc/fb/dubai-es-una-ciudad-emirato.jpg' },
    { name: 'Jerusalem', img: 'https://photo620x400.mnstatic.com/0bd264752be6926da69a1b52814777c6/ciudad-vieja-de-jerusalen.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 2500); // Cambia de imagen cada 2.5 segundos

    return () => clearInterval(interval); // Limpieza del intervalo al desmontar
  }, [cities.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cities.length) % cities.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <h2 className="text-2xl font-bold text-center">Popular Mytineraries</h2>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cities.map((city, index) => (
              <div key={index} className="relative flex-none w-full h-full">
              <img src={city.img} alt={city.name} className="w-full h-full object-cover" />
              <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-70">{city.name}</p> {/* Texto centrado */}
            </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2">Prev</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2">Next</button>
    </div>
  );
};

export default Carousel;