const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>');
});

let visitas = 1;
app.get("/visitas", (req, res) => {
  res.send({ message: `Cantidad de visitas es ${visitas++}` });
});

app.get("/fyh", (req, res) => {
    res.send({ fyh: moment().format('DD/MM/YYYY:hh:mm') }
    );
  });

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Listening app port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error", error);
});