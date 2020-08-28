const cliente = require("../models/cliente.model");
const db = require("../db");
const ctrlCliente = {};
const success = 0;
const fail = -1;
ctrlCliente.getClientes = async (req, res) => {
  await db.query("Select * from clientes", (err, data) => {
    if (!err) {
      res.json({
        Cve_Error: success,
        Cve_Mensaje: "All Clients",
        data: data,
      });
    } else {
      res.json({
        Cve_Error: fail,
        Cve_Mensaje: "Something go wrone!",
        data: data,
      });
    }
  });
};

ctrlCliente.getClienteById = async (req, res) => {
  const { id } = req.params;
  const sql = `Select * from clientes where Cliente_ID = ${id}`;
  const query = await db.query(sql, id, (err, data) => {
    if (!err) {
      res.json({
        Cve_Error: success,
        Cve_Mensaje: "Great we found a Client",
        data: data,
      });
    } else
      res.json({
        Cve_Error: fail,
        Cve_Mensaje: "Something go wrone! Maybe there aren't user with that id",
        err,
      });
  });
};

ctrlCliente.createCliente = async (req, res) => {
  newcliente = new cliente();
  const bodyClient = req.body;

  newcliente = {
    ...bodyClient,
    Created_at: new Date(),
    Updated_at: new Date(),
  };
  const sqlcmd = "INSERT INTO clientes SET ?";
  const query = await db.query(sqlcmd, newcliente, (err, data) => {
    if (!err) {
      res.json({
        Cve_Error: success,
        Cve_Mensaje: "Success register of you new Client",
      });
    } else
      res.json({
        Cve_Error: fail,
        Cve_Mensaje: "Something went wrong!",
        err,
      });
  });
};

ctrlCliente.updateCliente = async (req, res) => {
  updaCliente = new cliente();
  const sp_ID = req.params.id;
  const { sp_ESTATURA, sp_PESO } = req.body;
  updaCliente = {
    Cliente_ID: sp_ID,
    Estatura: sp_ESTATURA,
    Peso: sp_PESO,
  };

  const sqlcmd = `CALL sp_UpdateEstaturaPeso(${sp_ID},${sp_ESTATURA}, ${sp_PESO})`;
  const query = await db.query(sqlcmd, updaCliente, (err, data) => {
    if (!err) {
      res.json({
        Cve_Error: success,
        Cve_Mensaje: "Successful updating Client",
      });
    } else
      res.json({
        Cve_Error: fail,
        Cve_Mensaje: "We could't update client something went wrong!",
        err,
      });
  });
};

ctrlCliente.deleteClient = async (req, res) => {
  const { id } = req.params;
  const sqlcmd = `CALL SP_ELIMINAR_CLIENTE(${id})`;
  const query = await db.query(sqlcmd, (err, data) => {
    if (!err) {
      res.json({
        Cve_Error: success,
        Cve_Mensaje: "Successful deleting Client",
      });
    } else
      res.json({
        Cve_Error: fail,
        Cve_Mensaje: "We could't update client something went wrong!",
        err,
      });
  });
};
module.exports = ctrlCliente;
