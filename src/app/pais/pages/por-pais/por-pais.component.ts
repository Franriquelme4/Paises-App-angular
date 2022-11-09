import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  mostrarSugerencias:boolean = false;
  termino: string = '';
  existeError: boolean = false;
  paises: Country[]= [];
  paisesSugeridos: Country[]= [];
  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }
  buscar(termino:string) {
    this.termino = termino;
    this.existeError = false;
    this.paisService.buscarPais(this.termino).subscribe(response => {
      console.log(response);
      this.paises = response;
    }, error => {
      console.log(error);
      this.existeError = true;
      this.paises = [];
    })
  }
  sugerencias(termino:string){
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(paises=>{
      this.paisesSugeridos = paises.splice(0,5);
    })
  }

  buscarPorSugerencias(termino:string){
this.mostrarSugerencias = false;
    this.buscar(termino);
  }

}
