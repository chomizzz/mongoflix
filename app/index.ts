const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://mongodb:27017/testdb")
	.then(() => console.log("Connecté à MongoDB"))
	.catch((err) => console.error("Erreur MongoDB", err));

app.get("/", (req, res) => {
	res.send("Hello MongoDB + Express + Docker");
});

app.listen(PORT, () => {
	console.log(`Serveur lancé sur le port ${PORT}`);
});
