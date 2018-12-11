import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/models/persona';
import { Http } from '@angular/http';
import { Foto } from 'src/models/fotos';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  personas: Persona[];
 fotos:Foto[]
  constructor(private http: Http) {
    console.log("AKI" + this.personas);
    this.personas=[];
    this.getPersonas();
    console.log(this.getPersonas());
    
   }

  ngOnInit() {
  }
// obtener personas
  getPersonas(){
    this.personas=[];
    this.http.get('http://www.yavirac.edu.ec/museo/server/persona/leer?foo=' + Math.random())
    .toPromise()
    .then(response=>{
      this.personas = response.json()as Persona[];
      console.log("AKA" +response);
      
    }).catch (error=>{
      console.log(error);
      
    })
  }

  //obtener fotos
  getFoto(){
    this.fotos=[];
    this.http.get('http://www.yavirac.edu.ec/museo/server/fotos/leer?foo=' + Math.random())
    .toPromise()
    .then(res=>{
      this.fotos = res.json()as Foto[];
      let a;
      console.log("FOTOS"+this.fotos);
      
  // a = 'data::image/jpeg;base64,'+ 
    }).catch(error=>{
      console.log(error);
      
    })
  
}
}