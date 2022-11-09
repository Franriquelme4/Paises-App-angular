import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-imput',
  templateUrl: './pais-imput.component.html',
  styleUrls: ['./pais-imput.component.css']
})
export class PaisImputComponent implements OnInit {
  termino: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  deboucer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
    this.deboucer.pipe(
      debounceTime(300)
    ).subscribe(valor=>{
      this.onDebounce.emit(valor)
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }
  teclaPresionada(){
    this.deboucer.next(this.termino);

  }

}
