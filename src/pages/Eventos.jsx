import React from "react";
import "../style.css";

const Eventos = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">
        <span className="gamer-title">Bienvenido A Level-Up! Gamer Events</span>
      </h1>
      <p>
        Aca podras encontrar todos los eventos a la cual puedes asistir y ganar
        puntos Level-Up como también unos premios 🔥🔥🔥
      </p>

      <div className="catalogo d-flex flex-wrap justify-content-center gap-4 mt-4">
        {/* Evento 1 */}
        <div className="card custom-card" style={{ width: "18rem" }}>
          <img
            src="assets/img/evento1.png"
            className="card-img-top"
            alt="Evento 1"
          />
          <div className="card-body">
            <h5 className="card-title">
              Evento el Próximo 10 De Septiembre!
            </h5>
            <p className="card-text">
              Participa y gana puntos Level-Up y más!! Desde las 12:00 Hasta las
              17:00 hrs.
            </p>
            <a
              href="https://maps.app.goo.gl/L63V9Vni6PS7TNAQ9"
              className="btn btn-ubicacion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-location-dot me-2"></i> Ubicación
            </a>
          </div>
        </div>

        {/* Evento 2 */}
        <div className="card custom-card" style={{ width: "18rem" }}>
          <img
            src="assets/img/evento2.png"
            className="card-img-top"
            alt="Evento 2"
          />
          <div className="card-body">
            <h5 className="card-title">
              Evento El Próximo 11 De Septiembre!
            </h5>
            <p className="card-text">
              Participa en este evento para ganar más puntos Level-Up y más
              premios! Desde las 13:00 hasta las 19:00 hrs.
            </p>
            <a
              href="https://maps.app.goo.gl/XcgsKTkNvDTrftm89"
              className="btn btn-ubicacion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-location-dot me-2"></i> Ubicación
            </a>
          </div>
        </div>

        {/* Evento 3 */}
        <div className="card custom-card" style={{ width: "18rem" }}>
          <img
            src="assets/img/evento3.png"
            className="card-img-top"
            alt="Evento 3"
          />
          <div className="card-body">
            <h5 className="card-title">
              Próximo Evento Fonda Gamer!! Desde el 16 Hasta 18 De Septiembre.
            </h5>
            <p className="card-text">
              Participa en los múltiples juegos típicos chilenos, entre otros,
              desde las 13:00 hasta las 23:00 hrs.
            </p>
            <a
              href="https://maps.app.goo.gl/DgfKttXq3HtSzd3u6"
              className="btn btn-ubicacion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-location-dot me-2"></i> Ubicación
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
