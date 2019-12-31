import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  paises = ['Argentina', 'Uruguay', 'Chile'];

  model = new Cliente(12, 'Diego', 'Juiz', 'dvjuiz', this.paises[0], 'dvjuiz');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

  newCliente() {
    this.model = new Cliente(42, '', '', '', '');
  }

}
