import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={city.img} alt={city.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{city.name}</h2>
        <p>{city.description}</p>
      </div>
    </div>
  );
};

export default CityCard;