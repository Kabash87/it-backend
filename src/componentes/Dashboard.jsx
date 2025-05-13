import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-wrapper">
    
    {/* Contenido principal */}
    <div className="content">
      <h2>Bienvenido al Panel de Administración</h2>

      {/* Banner */}
      <div className="card card-dark mb-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="/banner.jpg" className="img-fluid rounded-start" alt="Banner" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title ">Italian Trattoria</h5>
              <p className="card-text text-justify">
                Auténtica cocina italiana en un ambiente acogedor. Nuestra misión es ofrecer una experiencia gastronómica inolvidable, con ingredientes frescos y recetas tradicionales. 
                Desde pastas caseras hasta pizzas al horno de leña, cada plato es una obra maestra. Ven y disfruta de un viaje culinario a Italia sin salir de la ciudad.
              </p>
              <a href="/" className="btn btn-success">Visitar Sitio Web</a>
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
            <div className="card card-dark text-center p-3">
              <h1>{s.value}</h1>
              <p>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Accesos Rápidos */}
      <div className="card card-dark mb-4 p-3">
        <h5>Accesos Rápidos</h5>
        <div className="d-flex flex-column gap-2">
          <button className="btn btn-outline-success w-100">
            <i className="bi bi-plus-circle"></i> Añadir Nuevo Producto
          </button>
          <button className="btn btn-outline-success w-100">
            <i className="bi bi-file-earmark-text"></i> Crear Nueva Publicación
          </button>
          <button className="btn btn-outline-success w-100">
            <i className="bi bi-tag"></i> Crear Nueva Promoción
          </button>
        </div>
      </div>

      {/* Descripción */}
      <div className="card card-dark p-3">
        <h5>Acerca de Italian Trattoria</h5>
        <p>
          Italian Trattoria es una auténtica experiencia gastronómica italiana fundada en 2010 en el corazón de la ciudad.
          Nuestro chef, originario de Italia, trae consigo recetas familiares que han sido transmitidas de generación en generación.
            Nos enorgullece utilizar ingredientes frescos y de alta calidad, muchos de los cuales son importados directamente de Italia.
        </p>
      </div>
    </div>
  </div>
);

export default Dashboard;
