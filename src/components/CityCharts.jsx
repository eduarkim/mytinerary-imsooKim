// src/components/CityCharts.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const CityCharts = () => {
  const citiesData = [
    { name: 'New York', value: 100, img: 'https://media.istockphoto.com/id/1153849876/es/foto/vista-panor%C3%A1mica-de-los-rascacielos-de-manhattan-por-la-noche-en-navidad-desde-la-zona-de.jpg?s=612x612&w=0&k=20&c=rondqEvk3JcU37itVAFjdiwl7PYBR2Mxk2HXmtjFfKE=' },
    { name: 'Paris', value: 80, img: 'https://static.vecteezy.com/system/resources/previews/028/295/738/non_2x/eiffel-tower-paris-france-sunrise-generate-ai-photo.jpeg' },
    { name: 'Tokyo', value: 90, img: 'https://st.depositphotos.com/1035350/4144/i/450/depositphotos_41449851-stock-photo-shinjuku-tokyo.jpg' },
    { name: 'Seoul', value: 70, img: 'https://static.toiimg.com/thumb/111258523/Seoul-South-Korea.jpg?width=1200&height=900' },
    { name: 'London', value: 110, img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=1400&h=1400&s=1' },
    { name: 'Barcelona', value: 95, img: 'https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg' },
    { name: 'Berlin', value: 85, img: 'https://viajes.nationalgeographic.com.es/medio/2017/02/09/shutterstock-302415089_6b607cdb.jpg' },
    { name: 'Rome', value: 75, img: 'https://tourismmedia.italia.it/is/image/mitur/1600X1000_storia_e_curiosita_su_roma_1-2?wid=800&hei=500&fit=constrain,1&fmt=webp' },
    { name: 'Buenos Aires', value: 65, img: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/03201757/Ciudades-mas-caras-de-America-Latina-Buenos-Aires.jpg' },
    { name: 'Sydney', value: 120, img: 'https://fotografias.larazon.es/clipping/cmsimages02/2019/08/07/4DA2DAB5-8E42-4872-A15A-4EA75C9CB7F9/98.jpg?crop=1031,580,x0,y50&width=1900&height=1069&optimize=low&format=webply' },
    { name: 'Dubai', value: 130, img: 'https://media-cdn.tripadvisor.com/media/photo-s/18/66/dc/fb/dubai-es-una-ciudad-emirato.jpg' },
    { name: 'Jerusalem', value: 60, img: 'https://photo620x400.mnstatic.com/0bd264752be6926da69a1b52814777c6/ciudad-vieja-de-jerusalen.jpg' },
  
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">City Charts</h2>
      <BarChart width={600} height={300} data={citiesData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      {/* Mostrar imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {citiesData.map((city) => (
          <div key={city.name} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold">{city.name}</h3>
            <img src={city.img} alt={city.name} className="w-full h-auto rounded" />
            <p className="mt-2">Value: {city.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCharts;