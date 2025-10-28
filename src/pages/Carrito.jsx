import React from "react";

export default function Carrito() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛒 Tu Carrito</h2>
      <div className="table-responsive neon-border">
        <table className="table table-dark table-bordered align-middle text-center">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="assets/img/MousePadDigitalCircus.webp"
                  alt="MousePad Digital Circus"
                  style={{ width: "80px", borderRadius: "8px" }}
                />
              </td>
              <td>MousePad Digital Circus Oficial!</td>
              <td>
                <span className="precio-original">$30.000</span>
                <br />
                <span className="precio-descuento">$24.000</span>
              </td>
              <td>
                <input type="number" value="1" min="1" className="form-control cantidad" />
              </td>
              <td className="subtotal">$24.000</td>
              <td>
                <button className="btn btn-danger btn-sm eliminar">
                  <i className="fas fa-trash"></i> Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-end mt-3">
        <h4>Total: <span id="carrito-total">$24.000</span></h4>
        <a href="/" className="btn btn-outline-light mt-2">➕ Seguir Comprando</a>
        <a href="/compra" className="btn btn-success mt-2">Finalizar Compra</a>
      </div>
    </div>
  );
}
