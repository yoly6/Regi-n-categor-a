import { Component, OnInit, ɵɵhostProperty } from '@angular/core';
import { Country } from 'src/app/interfazes/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  hayError: Boolean = false;
  termino: string = '';
  paises: Country[] = [];
  constructor(private paisService: PaisService) { }



  buscar() {

    this.hayError = false;

    console.log(this.termino);
    this.paisService.buscarPais(this.termino).
      subscribe(
        (paises) => {
        console.log(paises);
      }, (err) => {
        this.hayError=true;
        this.paises = []
      })
  };
}
