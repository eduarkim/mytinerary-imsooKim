import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-gray-700 h-full w-64 p-4">
      <ul>
        <li><Link to="/Cities" className="text-white">Cities</Link></li>
        {/* Otras opciones del menú */}
      </ul>
    </nav>
  );
};

export default Sidebar;