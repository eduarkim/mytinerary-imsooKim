import React from 'react';
import { Link } from 'react-router-dom';
/*
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://img.freepik.com/vector-premium/diseno-logotipo-viaje-avion-aire-plano_8035-9.jpg" alt="Logo" className="h-10" /> {}
        <span className="ml-2 text-xl">MyTinerary</span>
      </div>
      <div className="flex items-center">
        <img src="https://static.vecteezy.com/system/resources/previews/005/005/840/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="Usuario" className="h-10 rounded-full" />
      </div>
    </header>
  );
};
*/
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">MyTinerary</div>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cities" className="hover:underline">Cities</Link>
      </nav>
    </header>
  );
};
export default Header;