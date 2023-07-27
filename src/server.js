// import express from "express";
const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views/");

app.get("/", (req, res) => res.render("home"));
app.get("/webar", (req, res) => {
    res.sendFile(__dirname + "/views/webar.html");
})

const handleListen = ()=>console.log('Listening on http://localhost:3000');
app.listen(3000, handleListen);