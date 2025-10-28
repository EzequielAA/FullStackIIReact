import React from "react";

export default function Noticias() {
  return (
    <div className="text-white">
      <div className="container text-center mt-5">
        <h1 className="mb-4 gamer-title">Bienvenido A Level-Up! Gamer News And Tips</h1>
        <p>
          Aca podrás encontrar noticias de videojuegos y protips de tus videojuegos favoritos 🔥🔥🔥
        </p>
      </div>

      {/* Carrusel de noticias */}
      <div id="NoticiasCarousel" className="carousel slide my-carousel mt-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#NoticiasCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#NoticiasCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#NoticiasCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/img/silksong.jpg" className="d-block w-100 carousel-img" alt="Silksong" />
            <div className="carousel-caption d-none d-md-block">
              <h5>¡Finalmente salió!</h5>
              <p>Silksong sale a la venta y provoca caída de Steam 😱</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="assets/img/metalgear.webp" className="d-block w-100 carousel-img" alt="Metal Gear" />
            <div className="carousel-caption d-none d-md-block">
              <h5>¡Ya disponible!</h5>
              <p>El remake del legendario Metal Gear está aquí 🎮</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="assets/img/silenthillF.jpg" className="d-block w-100 carousel-img" alt="Silent Hill F" />
            <div className="carousel-caption d-none d-md-block">
              <h5>El terror tipo Soulslike está cerca...</h5>
              <p>Silent Hill F aterriza este 25 de septiembre en PS5, Xbox Series y PC 👻</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#NoticiasCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#NoticiasCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Sección de consejos */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
        <div className="card bg-dark text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">¡Obtén el Caballo Legendario!</h5>
            <h6 className="card-subtitle mb-2 text-secondary">Red Dead Redemption II</h6>
            <p className="card-text">
              Después de hacer la misión de cazar el oso con Hosea puedes conseguir el Árabe Blanco poco después del inicio del juego 🐎
            </p>
            <a href="https://youtu.be/GbQzzFWs0j8?si=r7pQX5BF86XA9YXX" className="card-link" target="_blank" rel="noreferrer">
              Tutorial
            </a>
          </div>
        </div>

        <div className="card bg-dark text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Pásate el juego en 20 minutos 😱</h5>
            <h6 className="card-subtitle mb-2 text-secondary">Outlast</h6>
            <p className="card-text">
              Al inicio del juego, antes de entrar por la ventana, puedes saltar directamente al final del juego con un glitch 😏
            </p>
            <a href="https://youtu.be/196f334tr9U?si=hgjDebUp17w267Io" className="card-link" target="_blank" rel="noreferrer">
              Tutorial
            </a>
          </div>
        </div>

        <div className="card bg-dark text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Reinicia tu mando de PS fácilmente 🎮</h5>
            <h6 className="card-subtitle mb-2 text-secondary">Funciona en DualShock 3/4 y DualSense</h6>
            <p className="card-text">
              ¿Sabías que en la parte trasera del mando hay un pequeño botón que sirve para reiniciarlo cuando presenta errores?
            </p>
            <a href="https://youtu.be/hrPfZ4CGgYI?si=hEUZRw-NZ0UxiVRs" className="card-link" target="_blank" rel="noreferrer">
              Tutorial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
