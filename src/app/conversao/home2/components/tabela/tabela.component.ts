import { Component, Input } from '@angular/core';
import { Valor } from '../../model/valor';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  @Input() public valor!: Valor;

}
