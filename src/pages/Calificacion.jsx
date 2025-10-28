import React from "react";
import { useNavigate } from "react-router-dom";

export default function Calificacion() {
  const navigate = useNavigate(); // Hook de navegación

  return (
    <div className="container mt-5 text-white">
      <div className="row">
        {/* Imagen del producto */}
        <div className="col-md-5">
          <div className="card custom-card bg-dark border-0">
            <img
              src="assets/img/MousePadDigitalCircus.webp"
              className="card-img-top"
              alt="MousePad Digital Circus"
            />
          </div>
        </div>

        {/* Detalle del producto */}
        <div className="col-md-7">
          <div className="card custom-card bg-dark p-4 border-0 text-white">
            <h3 className="card-title">MousePad Digital Circus Oficial!</h3>
            <p className="card-text">
              MousePad De Digital Circus Original Por Glitch Productions.  
              15,7 pulgadas (alto) x 34,7 pulgadas (ancho)
            </p>
            <p>
              <span className="precio-original">$30.000</span>{" "}
              <span className="precio-descuento">$24.000</span>
              <br />
              <span className="descuento">
                20% de descuento activado con correo @duocuc.cl
              </span>
            </p>
            <p>
              <strong>Calificación:</strong>{" "}
              <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
              <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
              <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
              <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
              <i className="fas fa-star" style={{ color: "#FFD700" }}></i>{" "}
              (10 personas)
            </p>
            <button
              className="btn btn-accent"
              onClick={() => navigate("/carrito")} // Navega al carrito
            >
              Comprar
            </button>
          </div>
        </div>
      </div>

      {/* Opiniones de usuarios */}
      <div className="mt-5">
        <h4>Opiniones de usuarios</h4>
        <div className="card custom-card bg-dark text-white p-3 mb-3">
          <strong>Marcela Mena.</strong>{" "}
          <span className="text-warning">
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
          <p>Excelente calidad y tamaño perfecto para mi setup!</p>
        </div>

        <div className="card custom-card bg-dark text-white p-3 mb-3">
          <strong>Francisco Olate.</strong>{" "}
          <span className="text-warning">
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </span>
          <p>Buen producto, pero esperaba un poco más de calidad de la textura.</p>
        </div>

        <div className="card custom-card bg-dark text-white p-3 mb-3">
          <strong>Nicolas Caro.</strong>{" "}
          <span className="text-warning">
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i><i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
          <p>Normal, No es la gran cosa pero cumple su función.</p>
        </div>
      </div>

      {/* Comentarios (simulados deshabilitados) */}
      <div className="mt-5 mb-5">
        <h4>Deja tu comentario</h4>
        <div className="card-perfil mx-auto bg-dark text-white p-4" style={{ maxWidth: "500px" }}>
          <form>
            <div className="mb-3">
              <label htmlFor="nombreUsuario" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreUsuario"
                placeholder="Escribe tu nombre"
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comentarioUsuario" className="form-label">
                Comentario
              </label>
              <textarea
                className="form-control"
                id="comentarioUsuario"
                rows="4"
                placeholder="Escribe tu comentario"
                disabled
              ></textarea>
            </div>
            <button type="submit" className="btn btn-accent" disabled>
              Agregar Comentario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
