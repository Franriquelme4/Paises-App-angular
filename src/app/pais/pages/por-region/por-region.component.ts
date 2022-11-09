import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  regiones:string[] = [`africa`, `americas`, `asia`, `europe`, `oceania`];
  regionActiva:string = "";
  termino: string = '';
  existeError: boolean = false;
  paises: Country[]= [];
  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }
  buscar(termino:string) {

  }
  sugerencias(termino:string){

  }
  activarRegion(region:string){
    if(this.regionActiva == region) return;

    this.regionActiva = region;
    this.existeError = false;
    this.paisService.buscarRegion(this.regionActiva).subscribe(response => {
      console.log(response);
      this.paises = response;
    }, error => {
      console.log(error);
      this.existeError = true;
      this.paises = [];
    })
  }
}
