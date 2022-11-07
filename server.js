const express = require("express");
const fs = require("fs");
const { getCanciones, postCancion, updateCancion, deleteCancion } = require("./servicio/cancionesServicio");

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {
    res.end(data);
  });
});

app.get("/canciones", async (req, res) => {
    try {
        res.json(await getCanciones());
        res.status(200);
        res.end();
    } catch (error) {
        res.status(500);
        res.end();
    }
});

app.post("/cancion", (req, res) => {
    try {
        res.json(postCancion(req.body));
        res.status(200);
        res.end();
    } catch (error) {
        res.status(500);
        res.end();
    }
});

app.put("/cancion", (req, res) => {
    try {
        res.json(updateCancion(req.body));
        res.status(200);
        res.end();
    } catch (error) {
        res.status(500);
        res.end();
    }
});

app.delete("/cancion", (req, res) => {
    try {
        res.json(deleteCancion(req.query.id));
        res.status(200);
        res.end();
    } catch (error) {
        res.status(500);
        res.end();
    }
});

app.listen("3000", () => {
  console.log("Servidor levantado en el puerto 3000");
});
