import { Component, OnInit } from '@angular/core';
import { SmartCasamentoService } from 'src/app/services/smart-casamento.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public smartCasamentoService: SmartCasamentoService) { }

  ngOnInit() {
  }

  async solicitarEntradaCasamento() {
    await this.smartCasamentoService.solicitarEntradaCasamento();

  }

}
