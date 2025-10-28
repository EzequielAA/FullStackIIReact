import React from "react";

export default function ProductCard({ image, title, desc, precioOriginal, precioDescuento }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {desc}<br />
          <span className="precio-original">{precioOriginal}</span>{" "}
          <span className="precio-descuento">{precioDescuento}</span><br />
          <span className="descuento">20% de descuento activado con correo @duocuc.cl</span>
        </p>
        <a href="#" className="btn btn-primary">Agregar Al Carrito</a>
      </div>
    </div>
  );
}
