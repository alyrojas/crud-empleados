import { Empleado } from './../models/empleado';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class EmpleadoService {
  URL_API = 'http://localhost:3000/empleados/';

  public empleado:Empleado=
  {nombre:'',puesto:'',email:'',sueldo: 0};

  empleados: Empleado[]=[];

  //Constructor(){}
  constructor(private http: HttpClient){}

  getEmpleados(){
    return this.http.get<Empleado[]>(this.URL_API);
  }

  createEmpleado(empleado:Empleado){
    //const id= this.empleados[this.empleados.length-1].id+1;
    //empleado.id = id;
    //console.log(id)
    //this.empleados.push(empleado);
    return this.http.post(this.URL_API,empleado);
  }

  deleteEmpleado(_id:any){
    //const pos = this.empleados.findIndex(item => item.id==id);
    //console.log(pos);
    //this.empleados.splice(pos,1);
    return this.http.delete(this.URL_API+_id);
  }

  editEmpleado(empleado:Empleado){
    //const pos = this.empleados.findIndex(item => item.id==empleado.id);
      //console.log(pos);
    
  //this.empleados[pos]=empleado;
  //return this.empleados;
  return this.http.put(this.URL_API+empleado._id,empleado);
  }
}
