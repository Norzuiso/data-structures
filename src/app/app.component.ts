import {Component, OnInit, ViewChild} from '@angular/core';
import {FuuuckService} from "./Components/fuuuck.service";
import {JSONRecord} from "./Components/JSONRecord";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  answer: JSONRecord[] = [];

  constructor(private service: FuuuckService) {
  }

  ngOnInit(): void {
    this.service.getJSON().subscribe(data => this.answer = data);
  }


}
