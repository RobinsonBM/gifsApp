import { Component} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent{

  constructor( private gifsService: GifsService) {

  };                //Inyectar las propiedades del servicio

  public get historial(): string[] {
    return this.gifsService.historial;                              //Retorno la propiedad historial del servicio con el Array
  }

  buscar( termino:string ) {
    this.gifsService.buscarGifs(termino);
  }

}
