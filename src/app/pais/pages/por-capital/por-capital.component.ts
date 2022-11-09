import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  existeError: boolean = false;
  paises: Country[]= [];
  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }
  buscar(termino:string) {
    this.termino = termino;
    this.existeError = false;
    this.paisService.buscarCapital(this.termino).subscribe(response => {
      console.log(response);
      this.paises = response;
    }, error => {
      console.log(error);
      this.existeError = true;
      this.paises = [];
    })
  }
  sugerencias(termino:string){

  }

}
