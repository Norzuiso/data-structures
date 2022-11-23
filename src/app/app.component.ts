import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "./Components/data.service";
import {JSONRecord} from "./Components/JSONRecord";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public answer: JSONRecord[] = [];

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.service.getJSON().subscribe(data => this.answer = data);
  }

  public basicos(){
    this.service.getTiposDeDatos().subscribe(data => this.answer = data);
  }

  public busqueda(){
    this.service.getBusqueda().subscribe(data => this.answer = data);
  }

  public poo(){
    this.service.getPOO().subscribe(data => this.answer = data);
  }

  public ordenamiento(){
    this.service.getOrdenamiento().subscribe(data => this.answer = data);
  }

  public apuntadores(){
    this.service.getApuntadores().subscribe(data => this.answer = data);
  }

  public avanzados(){
    this.service.getAvanzado().subscribe(data => this.answer = data);
  }

  public listas(){
    this.service.getListas().subscribe(data => this.answer = data);
  }

  public arbolesGrafos(){
    this.service.getArbolesGrafos().subscribe(data => this.answer = data);
  }
}
