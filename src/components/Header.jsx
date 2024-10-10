import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="https://img.freepik.com/vector-premium/diseno-logotipo-viaje-avion-aire-plano_8035-9.jpg" alt="Logo" className="h-10" /> {/* Logo opcional */}
        <span className="ml-2 text-xl">MyTinerary</span>
      </div>
      <div className="flex items-center">
        <img src="https://static.vecteezy.com/system/resources/previews/005/005/840/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="Usuario" className="h-10 rounded-full" />
      </div>
    </header>
  );
};

export default Header;