import React from 'react';
import CitiCard from './CityCard';

const Cities = () => {
  const cities = [
    { name: 'New York', description: 'The city that never sleeps.', img: 'https://media.istockphoto.com/id/1153849876/es/foto/vista-panor%C3%A1mica-de-los-rascacielos-de-manhattan-por-la-noche-en-navidad-desde-la-zona-de.jpg?s=612x612&w=0&k=20&c=rondqEvk3JcU37itVAFjdiwl7PYBR2Mxk2HXmtjFfKE=' },
    { name: 'Paris', description: 'The city of lights.', img: 'https://static.vecteezy.com/system/resources/previews/028/295/738/non_2x/eiffel-tower-paris-france-sunrise-generate-ai-photo.jpeg' },
    { name: 'Tokyo', description: 'A bustling metropolis.', img: 'https://st.depositphotos.com/1035350/4144/i/450/depositphotos_41449851-stock-photo-shinjuku-tokyo.jpg' },
    { name: 'Seoul', description: 'Seoul, the capital and largest city of South Korea, is a vibrant metropolis that seamlessly blends ancient traditions with modern innovations. Officially known as Seoul Special Metropolitan City, it serves as the political, economic, and cultural heart of the nation.', img: 'https://static.toiimg.com/thumb/111258523/Seoul-South-Korea.jpg?width=1200&height=900' },
    { name: 'London', description:'A city with rich history.' , img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=1400&h=1400&s=1' },
    { name: 'Barcelona', description:'Famous for its art and architecture.', img: 'https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg' },
    { name: 'Berlin',  description: 'A city with vibrant culture.', img: 'https://viajes.nationalgeographic.com.es/medio/2017/02/09/shutterstock-302415089_6b607cdb.jpg' },
    { name: 'Rome', description: 'The eternal city.' , img: 'https://tourismmedia.italia.it/is/image/mitur/1600X1000_storia_e_curiosita_su_roma_1-2?wid=800&hei=500&fit=constrain,1&fmt=webp' },
    { name: 'Buenos Aires', description: 'Buenos Aires, the capital of Argentina, is a vibrant and cosmopolitan city located on the western shore of the Río de la Plata. Known for its rich cultural heritage and diverse population, Buenos Aires is often referred to as the "Paris of South America" due to its European-style architecture and lively atmosphere.', img: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/03201757/Ciudades-mas-caras-de-America-Latina-Buenos-Aires.jpg' },
    { name: 'Sydney', description:'Home of the Sydney Opera House.', img: 'https://fotografias.larazon.es/clipping/cmsimages02/2019/08/07/4DA2DAB5-8E42-4872-A15A-4EA75C9CB7F9/98.jpg?crop=1031,580,x0,y50&width=1900&height=1069&optimize=low&format=webply' },
    { name: 'Dubai', description:'A city of luxury and innovation.', img: 'https://media-cdn.tripadvisor.com/media/photo-s/18/66/dc/fb/dubai-es-una-ciudad-emirato.jpg' },
    { name: 'Jerusalem', description: 'Jerusalem, one of the oldest cities in the world, holds profound significance for Judaism, Christianity, and Islam. Its history spans over 5,000 years, making it a focal point for religious and cultural developments.', img: 'https://photo620x400.mnstatic.com/0bd264752be6926da69a1b52814777c6/ciudad-vieja-de-jerusalen.jpg' },
  
  ];


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Explore Cities</h1>
      <input type="text" placeholder="Search for a city..." className="mt-4 p-2 border rounded w-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cities.map((city, index) => (
             <CityCard key={index} city={city} />
        ))}
      </div>
    </div>
  );
};

export default Cities;

/*
 {cities.map((city, index) => (
          <div key={city.name} className="border rounded-lg overflow-hidden shadow-md">
            <img src={city.img} alt={city.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{city.name}</h2>
              <p>{city.country}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
            </div>
          </div>
 ))}

*/