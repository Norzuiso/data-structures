import {Component, OnInit, ViewChild} from '@angular/core';
import {FuuuckService} from "./Components/fuuuck.service";
import {JSONRecord} from "./Components/JSONRecord";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public answer: JSONRecord[] = [];

  public showOptions = true;

  public showBasicos = false;
  public showPOO = false;
  public showApuntadores = false;
  public showListas = false;
  public showBusqueda = false;
  public showOrdenado = false;
  public showAvanzados = false;

  constructor(private service: FuuuckService) {
  }

  ngOnInit(): void {
    this.service.getJSON().subscribe(data => this.answer = data);
  }

  public basicos(){

  }
  public busqueda(){

  }
  public poo(){

  }
  public ordenamiento(){

  }
  public apuntadores(){

  }
  public avanzados(){

  }
  public listas(){
    
  }

}
