const empleadosCtrl2={};


const Empleado = require('../models/Empleado');

//obtener todos los empleados
empleadosCtrl2.getEmpleados=(req,res)=> {
    req.getConnection((err,conn) => {
       conn.query('SELECT * FROM empleado',(err,rows) => {
        if(err){
            console.log(err);
        }
        res.json(rows);
       });
    }); 

}

//Crear un empleado
empleadosCtrl2.createEmpleado= (req,res)=> {
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO empleado SET ?',
                         [data],(err,empleado) => {
            res.redirect('/empleados');
        });
    });
}


//res.send({message:'Empleado creado'});

//Eliminar empleado
empleadosCtrl2.deleteEmpleado= (req,res)=>{
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM empleado WHERE _id = ?',
                            [id],(err,rows) => {
            res.send(rows);
        });
    });
}

//cONSULTAR EMPLEADO
empleadosCtrl2.getEmpleado= (req,res)=>{
    const { id } = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM empleado WHERE _id = ?',
                            [id],(err,rows) => {
            res.send(rows);
        });
    });
}


//Editar empleado
empleadosCtrl2.editEmpleado= (req,res)=>{
    const { id } = req.params;
    const  data  = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE empleado SET ? WHERE _id = ?',
                                [data, id],(err,rows) => {
            res.redirect('/empleados');
        });
    });
}


module.exports= empleadosCtrl2;