import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let mensaje = "";

    if (edad < 18) {
      mensaje = "No puedes registrarte, debes ser mayor de edad.";
      alert(mensaje);
      return;
    }

    if (correo.endsWith("@duocuc.cl") && codigo !== "") {
      mensaje =
        "Registro completo +100 puntos Level-Up por código de invitación y 20% de descuento permanente en todos los productos";
    } else if (correo.endsWith("@duocuc.cl")) {
      mensaje =
        "Felicidades, se ha registrado y ha recibido un 20% de descuento permanente en todos los productos";
    } else if (codigo !== "") {
      mensaje =
        "Registro completo, bonificación agregada de 100 puntos Level-Up por invitación de un amigo!";
    } else {
      mensaje = "Felicidades, se ha registrado correctamente";
    }

    alert(mensaje);
    navigate("/perfil"); // Redirige a Perfil en React
  };

  return (
    <div className="container mt-5">
      <div className="card-perfil mx-auto" style={{ maxWidth: "400px" }}>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre Completo</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Edad</label>
            <input
              type="number"
              className="form-control"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Código de Invitado (opcional)</label>
            <input
              type="text"
              className="form-control"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-accent w-100">
            Registrarse
          </button>
          <p className="mt-2">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
