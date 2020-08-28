const express = require("express");
const ctrlCliente = require("../controllers/cliente.controller");

const clientRouter2 = express.Router();

clientRouter2
  .route("/NutriNET/Cliente")
  .get(ctrlCliente.getClientes)
  .post(ctrlCliente.createCliente);
clientRouter2
  .route("/NutriNET/Cliente/:id")
  .get(ctrlCliente.getClienteById)
  .put(ctrlCliente.updateCliente)
  .delete(ctrlCliente.deleteClient);

module.exports = clientRouter2;
