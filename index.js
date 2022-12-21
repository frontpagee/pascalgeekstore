const express = require('express');
const server = express();
const path = require('path');

server.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/inicial.html')); 
})

server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/perfil.html'));
})

server.get('/tarefas', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/tarefas.html'));
})

server.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/register.html'));
})

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/login.html'));
})

server.listen(3000);