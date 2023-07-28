// import express from "express";
const express = require("express");

const https = require('https');
const fs = require('fs');

const app = express();

//--- ssl 인증서 로드
const path = __dirname + "/moordo/";
const privateKey = fs.readFileSync(path+ "private.key", 'utf8');
const certificate = fs.readFileSync(path + "certificate.crt", 'utf8');
const caBundle = fs.readFileSync(path + "ca_bundle.crt", 'utf8'); // Optional, if you have a certificate chain

//--- ssl 옵션 객체를 생성
const sslOptions = {
    key: privateKey,
    cert: certificate,
    ca: caBundle // Optional, if you have a certificate chain
};

const serverHttps = https.createServer(sslOptions, app);


app.set("view engine", "pug");
app.set("views", __dirname + "/views/");

app.get("/", (req, res) => res.render("home"));
app.get("/webar", (req, res) => {
    res.sendFile(__dirname + "/views/webar.html");
})

const handleListen = ()=>console.log('Listening on http://localhost:3000');
app.listen(3000, handleListen);

serverHttps.listen(443, ()=>{
    console.log('server Running on Port 433');
});