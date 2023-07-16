import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Valor } from '../../model/valor';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  constructor(private http: HttpClient) {}

  public valor!: Valor;
  public moedaBrasil: any;
  public moedaAmericana: any;
  public moedaEuropeia: any;
  public moedargentina: any;


  getData(): Observable<any> {
    let url = `https://api.hgbrasil.com/finance?format=json-cors&key=1b024cf1`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public buscarValor() {
    this.getData().subscribe((data) => {
      this.valor = {
        americano: (this.moedaBrasil / data['results']['currencies']['USD']['buy']).toFixed(2),
        europeu: (this.moedaBrasil / data['results']['currencies']['EUR']['buy']).toFixed(2),
        argentino: (this.moedaBrasil / data['results']['currencies']['ARS']['buy']).toFixed(2)}   
      
    });
  }

}
