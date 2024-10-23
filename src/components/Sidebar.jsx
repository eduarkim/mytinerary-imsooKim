import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 hidden md:block">
      <nav className="space-y-2">
        <Link to="/" className="block hover:underline">Home</Link>
        <Link to="/cities" className="block hover:underline">Cities</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;