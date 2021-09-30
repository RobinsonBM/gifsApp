import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'Xi1BDIBTbo9K6g77yZr17hzCBeoBaGiK';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];                    //creo una propiedad privada de tipó array

  public resultados: Gif [] = [];

  public get historial() : string[] {                   //Creo un Get (propiedad) publica y y le retorno el array privado condicionado
    return [...this._historial];
  }

  constructor( private http: HttpClient){
    this.resultados = JSON.parse(localStorage.getItem('resultados')!);

    // this._historial = JSON.parse( localStorage.getItem('historial')!) || [];
    if ( localStorage.getItem('historial')) {
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    }
  };

  buscarGifs( query: string ) {                         //Metodo para agregar la consulta al array

    query = query.trim().toLowerCase();

    if ( !this._historial.includes( query ) ) {         //la propiedad INCLUDE determina cuando un array incluye un elemento. Si NO INCLUYE la busqueda, la agrega al Array
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10)      //remueve elementos de un array y si es necesario inserta nuevos elementos en su lugar

      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('lang', 'es')
    .set('q', query );

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params })
    .subscribe( (resp) => {
      this.resultados = resp.data;
      // resp.data[0].images.downsized_medium.url
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })        //subscribe es muy parecido al TEHN, se ejecuta cuando tengamos la resolucion de el get


  }

}
