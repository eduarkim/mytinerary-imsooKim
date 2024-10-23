// src/components/Home.jsx
import React from 'react';
import Carousel from './Carousel'; // Asegúrate de que este componente esté definido
import CityCharts from './CityCharts'; // Importa el nuevo componente
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="p-4">
    
        <h1 className="text-2xl font-bold mb-4">Welcome to MyTinerary</h1>
        <p className="mb-4">Find your perfect trip, designed by insiders who know and love their cities!</p>
        <Link to="/cities" className="text-blue-500 underline">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Go to Cities</button>
        </Link>
  

      <Carousel />
      <CityCharts /> {/* Agrega el componente aquí */}
    </main>
  );
};

export default Home;