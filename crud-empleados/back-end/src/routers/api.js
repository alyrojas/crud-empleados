const express = requiere('express');
const router= express.Router();
const empleado= require('../models/Empleado');

//Listar todos los empleados
router.get('/empleados',(req,res) => {
    Empleado.find({},(err,empleados) => {
    return res.json(empleados);
});
});

//Dar de alta un empleado
router.post('/empleados',(req,res) => {
    Empleado.create(req.body,(err, empleado) => {
    if(err){
        res.json(err);
    }else{ 
        return res.json(empleado)
    }
});
});

module.exports= router;
