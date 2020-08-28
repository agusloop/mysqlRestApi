class Cliente {
  constructor(
    Cliente_ID,
    Nombre_Usuario,
    Contrasena,
    Nombre,
    Apellidos,
    Correo_Electronico,
    Edad,
    Estatura,
    Peso,
    IMC,
    GEB,
    ETA,
    created_at,
    updated_at
  ) {
    this.Cliente_ID = Cliente_ID;
    this.Nombre_Usuario = Nombre_Usuario;
    this.Contrasena = Contrasena;
    this.Nombre = Nombre;
    this.Apellidos = Apellidos;
    this.Correo_Electronico = Correo_Electronico;
    this.Edad = Edad;
    this.Estatura = Estatura;
    this.Peso = Peso;
    this.IMC = IMC;
    this.GEB = GEB;
    this.ETA = ETA;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

module.exports = Cliente;
