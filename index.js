const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// --- EXPRESS
const express = require("express");
const app = express();
app.use(express.json());

const path = require("path");

///////////////////////////////////////////////////////////////////////////////

app.use(bodyParser.json());

app.use(express.static("public"));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// Configurar o mecanismo de modelo EJS
app.set("view engine", "ejs");

// Middleware para analisar dados do corpo da solicitação
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware para simular métodos PUT e DELETE em formulários HTML
app.use(methodOverride("_method"));

///////////////////////////////////////////////////////////////////////////////
// Rotas
app.get("/", (req, res) => {
  const name = req.body.name;
  // const name = "Kássio";
  res.render("index_login", { nome: `${name}` });
  console.log("-------------------------------------------------------------");
  console.log(req.query);
  console.log(req.body.name);
});

app.get("/home", (req, res) => {
  res.render("index");
});

///////////////////////////////////////////////////////////////////////////////
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
