// Registro
export function validarRegistro({ edad, correo, codigo }) {
  if (edad < 18) {
    return {
      valido: false,
      mensaje: "No puedes registrarte, debes ser mayor de edad."
    };
  }

  if (correo.endsWith("@duocuc.cl") && codigo !== "") {
    return {
      valido: true,
      mensaje:
        "Registro completo +100 puntos Level-Up por código de invitación y 20% de descuento permanente en todos los productos"
    };
  } else if (correo.endsWith("@duocuc.cl")) {
    return {
      valido: true,
      mensaje:
        "Felicidades, se ha registrado y ha recibido un 20% de descuento permanente en todos los productos"
    };
  } else if (codigo !== "") {
    return {
      valido: true,
      mensaje:
        "Registro completo, bonificación agregada de 100 puntos Level-Up por invitación de un amigo!"
    };
  } else {
    return { valido: true, mensaje: "Felicidades, se ha registrado correctamente" };
  }
}

// Login
export function validarLogin(correo, password) {
  // Para simplificar, simulamos que siempre es correcto
  return {
    valido: true,
    mensaje: "Inicio de sesión correcto",
    redireccion: "index.html"
  };
}
