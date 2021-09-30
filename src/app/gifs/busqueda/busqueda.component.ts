import { Component, ElementRef, ViewChild,} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement> ;

  constructor( private gifsService: GifsService) {}       //exporto el servicio para usar sus propiedades y metodos

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;     //Instancio el valor buscado en el input

    if (valor.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs( valor )                  //Utilizo el metodo del servicio y el argumento es el valor

    this.txtBuscar.nativeElement.value = '';              //Purgo el Input
  }
}
