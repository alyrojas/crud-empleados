const empleadosCtrl={};

const Empleado = require('../models/Empleado');

empleadosCtrl.getEmpleados= async (req,res)=> {
    const empleados= await Empleado.find();
    res.json(empleados); 

}

empleadosCtrl.createEmpleado= async (req,res)=> {
    const empleado= new Empleado(req.body);
    console.log(empleado);
    await empleado.save();
    res.send({message:'Empleado creado'});
}

//Eliminar empleado
empleadosCtrl.deleteEmpleado= async (req,res)=>{
    const empleado= await Empleado.findByIdAndDelete(req.params.id)
    res.json({message:'Empleado eliminado'})
}

//Listar Empleado
empleadosCtrl.getEmpleado= async (req,res)=>{
    const empleado = await Empleado.findById(req.params.id)
    res.send(empleado)
}

//Editar empleado
empleadosCtrl.editEmpleado= async (req,res)=>{
    const empleado= await Empleado.findByIdAndUpdate(req.params.id,req.body);
    res.json({message: 'Empleado actualizado'});
}


module.exports= empleadosCtrl;