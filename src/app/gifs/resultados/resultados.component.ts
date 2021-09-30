import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../../../../.history/src/app/gifs/interface/gifs.interface_20210927221916';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados():Gif [] {
    return this.gifsService.resultados;
  }


  constructor( private gifsService:GifsService) {}

}
