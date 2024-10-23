import React from 'react';

const Cities = () => {
  const cities = [
    { name: 'New York', img: 'https://media.istockphoto.com/id/1153849876/es/foto/vista-panor%C3%A1mica-de-los-rascacielos-de-manhattan-por-la-noche-en-navidad-desde-la-zona-de.jpg?s=612x612&w=0&k=20&c=rondqEvk3JcU37itVAFjdiwl7PYBR2Mxk2HXmtjFfKE=', country: 'USA' },
    { name: 'Paris', img: 'https://static.vecteezy.com/system/resources/previews/028/295/738/non_2x/eiffel-tower-paris-france-sunrise-generate-ai-photo.jpeg', country: 'France' },
    { name: 'Tokio', img: 'https://st.depositphotos.com/1035350/4144/i/450/depositphotos_41449851-stock-photo-shinjuku-tokyo.jpg', country: 'Japan' },
    // Más ciudades...
  ];


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Explore Cities</h1>
      <input type="text" placeholder="Search for a city..." className="mt-4 p-2 border rounded w-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cities.map((city) => (
          <div key={city.name} className="border rounded-lg overflow-hidden shadow-md">
            <img src={city.img} alt={city.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{city.name}</h2>
              <p>{city.country}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;