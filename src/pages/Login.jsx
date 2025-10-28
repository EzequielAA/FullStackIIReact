import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inicio de sesión correcto");
    navigate("/perfil"); // Redirige a Perfil en React
  };

  return (
    <div className="container mt-5">
      <div className="card-perfil mx-auto" style={{ maxWidth: "400px" }}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
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
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-accent w-100">
            Iniciar Sesión
          </button>
          <p className="mt-2">
            ¿No tienes cuenta? <Link to="/registro">Regístrate Aquí</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
