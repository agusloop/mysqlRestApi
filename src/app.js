const express = require("express");
const clienteRouter = require("./routes/cliente.routes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", clienteRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
