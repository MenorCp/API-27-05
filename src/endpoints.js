import { Router } from 'express';
import { corPrimaria, diaSem, fatorial } from './services.js';

const server = Router();

server.get('/diasemana', (req, resp) => {
    try{
    const cor = Number(req.query.a);
    const x = diaSem(cor);

    resp.send({
        nome: x
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message 
        })  
    }
}) 

server.get('/semaforo/:cor', (req, resp) => {
    
    try{
    
    const a = req.params.cor;

    const x = corPrimaria(a);
    
    resp.send({
        msg: x
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/fatorial', (req, resp) => {
    
    try{
    
    const a = req.query.a;

    const x = fatorial(a);
    
    resp.send({
        fat: x
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;