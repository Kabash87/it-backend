import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Dashboard.css';

const Dashboard = () => {
  // Estado para saber si el tema actual es oscuro
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    // Función que actualiza el estado cuando cambia el tema del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setIsDarkMode(e.matches);

    // Escuchamos cambios en la preferencia de color
    mediaQuery.addEventListener('change', handler);

    // Limpiar listener al desmontar
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Helper para clases de Bootstrap según el tema
  const cardClass = isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  const wrapperClass = isDarkMode ? 'dashboard-wrapper bg-secondary text-white' : 'dashboard-wrapper bg-white text-dark';
  const btnPrimary = isDarkMode ? 'btn btn-outline-light' : 'btn btn-outline-primary';
  const btnSuccess = isDarkMode ? 'btn btn-success' : 'btn btn-success';
  const btnWarning = isDarkMode ? 'btn btn-warning' : 'btn btn-warning';

  return (
    <div className={wrapperClass} style={{ minHeight: '100vh' }}>
      {/* Contenido principal */}
      <div className="content container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Bienvenido al Panel de Administración</h2>
          {/* Botón destacado "Canjear Cupones" */}
          <a href="/canjear-cupon" className={`${btnWarning}`}>
            <i className="bi bi-ticket-fill"></i> Canjear Cupones
          </a>
        </div>

        {/* Banner */}
        <div className={`card mb-4 ${cardClass}`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="/banner.jpg"
                className="img-fluid rounded-start"
                alt="Banner"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Italian Trattoria</h5>
                <p className="card-text text-justify">
                  Auténtica cocina italiana en un ambiente acogedor. Nuestra misión es ofrecer una experiencia gastronómica inolvidable, con ingredientes frescos y recetas tradicionales. Desde pastas caseras hasta pizzas al horno de leña, cada plato es una obra maestra. Ven y disfruta de un viaje culinario a Italia sin salir de la ciudad.
                </p>
                <a href="/" className={btnSuccess}>
                  Visitar Sitio Web
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="row g-3 mb-4">
          {[
            { label: 'Productos', value: 24 },
            { label: 'Promociones', value: 5 },
            { label: 'Publicaciones', value: 12 },
            { label: 'Visitas', value: '1.2k' },
          ].map((s, i) => (
            <div key={i} className="col-md-3">
              <div className={`card text-center p-3 ${cardClass}`}>
                <h1>{s.value}</h1>
                <p>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Accesos Rápidos */}
        <div className={`card mb-4 p-3 ${cardClass}`}>
          <h5>Accesos Rápidos</h5>
          <div className="d-flex flex-column gap-2">
            <button className={`${btnPrimary} w-100`}>
              <i className="bi bi-plus-circle"></i> Añadir Nuevo Producto
            </button>
            <button className={`${btnPrimary} w-100`}>
              <i className="bi bi-file-earmark-text"></i> Crear Nueva Publicación
            </button>
            <button className={`${btnPrimary} w-100`}>
              <i className="bi bi-tag"></i> Crear Nueva Promoción
            </button>
            <a href="/canjear-cupon" className={`${btnPrimary} w-100`}>
              <i className="bi bi-ticket"></i> Canjear Cupón
            </a>
          </div>
        </div>

        {/* Descripción */}
        <div className={`card p-3 ${cardClass}`}>
          <h5>Acerca de Italian Trattoria</h5>
          <p>
            Italian Trattoria es una auténtica experiencia gastronómica italiana fundada en 2010 en el corazón de la ciudad. Nuestro chef, originario de Italia, trae consigo recetas familiares que han sido transmitidas de generación en generación. Nos enorgullece utilizar ingredientes frescos y de alta calidad, muchos de los cuales son importados directamente de Italia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
