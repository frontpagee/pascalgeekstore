const express = require('express');
const server = express();
const path = require('path');

(async() =>{
    const database = require('./db');
    const Perfil = require('./modelo/perfil');
    const Login = require('./modelo/login');
    const Loja = require('./modelo/tarefas');

    try{
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Perfil.create({
            nome: 'aninha',
            sobrenome: 'dantas',
            telefone: '000000000',
            bairro: 'centro',
            rua: 'henrique herculano',
            cep: '58890000',
            estado: 'PB',
            email: 'clara.dantas@academico.ifpb.edu.br',
            pais: 'BRASIL',
            login: 'aninha',
            senha: 'aninha123'
        })

        const resultadoCreate2 = await Login.create({
            nomedeusuario: 'pascaslgeekstore',
            senha: 'aninha123'
        })

        const resultadoCreate3 = await Loja.create({
            nomedeusuario: 'pascaslgeekstore',
            senha: 'aninha123'
        })

        const resultadoCreate4 = await Tarefas.create({
            nomedeusuario: 'pascaslgeekstore',
            senha: 'aninha123'
        })
        

        console.log(resultadoCreate);
        console.log(resultadoCreate2);
        console.log(resultadoCreate3);
        console.log(resultadoCreate4);
        
    } catch(error){
        console.log(error);
    }
})();


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