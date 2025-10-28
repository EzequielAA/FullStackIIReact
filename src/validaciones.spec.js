import { validarRegistro, validarLogin } from "../src/validaciones";

describe("Validaciones Registro", () => {

  it("rechaza menores de 18", () => {
    const resultado = validarRegistro({ edad: 16, correo: "user@gmail.com", codigo: "" });
    expect(resultado.valido).toBe(false);
    expect(resultado.mensaje).toBe("No puedes registrarte, debes ser mayor de edad.");
  });

  it("acepta correo @duocuc.cl sin código", () => {
    const resultado = validarRegistro({ edad: 20, correo: "user@duocuc.cl", codigo: "" });
    expect(resultado.valido).toBe(true);
    expect(resultado.mensaje).toContain("20% de descuento");
  });

  it("acepta código de invitación", () => {
    const resultado = validarRegistro({ edad: 25, correo: "user@gmail.com", codigo: "ABC123" });
    expect(resultado.valido).toBe(true);
    expect(resultado.mensaje).toContain("100 puntos Level-Up");
  });

  it("acepta correo @duocuc.cl y código", () => {
    const resultado = validarRegistro({ edad: 22, correo: "user@duocuc.cl", codigo: "XYZ" });
    expect(resultado.valido).toBe(true);
    expect(resultado.mensaje).toContain("Registro completo +100 puntos");
  });

});

describe("Validaciones Login", () => {

  it("inicia sesión correctamente", () => {
    const resultado = validarLogin("user@gmail.com", "123456");
    expect(resultado.valido).toBe(true);
    expect(resultado.mensaje).toBe("Inicio de sesión correcto");
    expect(resultado.redireccion).toBe("index.html");
  });

});
