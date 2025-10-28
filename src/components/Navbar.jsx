import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* LOGO / NOMBRE */}
        <Link className="navbar-brand" to="/">
          Level-Up! Gamer
        </Link>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENIDO DE LA NAVBAR */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Tienda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/eventos">
                Eventos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/noticias">
                Noticias/Consejos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/perfil">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contacto
              </a>
            </li>
          </ul>

          {/* FORMULARIO DE BÚSQUEDA Y CATÁLOGO */}
          <form className="d-flex align-items-center">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-accent me-2" type="submit">
              Buscar
            </button>

            {/* MENÚ CATÁLOGO */}
            <div className="dropdown me-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="catalogoDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catálogo
              </button>
              <ul className="dropdown-menu" aria-labelledby="catalogoDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Juegos De Mesa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Accesorios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Consolas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Computadores Gamers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sillas Gamers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mouse
                  </a>
                </li>
                {/* ✅ CAMBIO AQUÍ: link funcional a /info */}
                <li>
                  <Link className="dropdown-item" to="/info">
                    MousePad
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Poleras Personalizadas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Polerones Gamers Personalizados
                  </a>
                </li>
              </ul>
            </div>

            {/* ICONO DE CARRITO */}
            <Link to="/carrito" className="carrito-icon">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
