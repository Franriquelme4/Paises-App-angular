import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    //la otra manera

    // this.activateRoute.params.subscribe(({id})=>{
    //   this.paisService.getPaisPorCodigo(id).subscribe(response=>{
    //     console.log(response);
    //   })
    // })
    this.activateRoute.params.pipe(
      switchMap((param) => this.paisService.getPaisPorCodigo(param['id'])), tap(console.log)
    ).subscribe(pais => {
      this.pais = pais
    })
  }


}
