import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JSONRecord} from "./JSONRecord";

@Injectable({
  providedIn: 'root'
})
export class FuuuckService {

  getFileA(){
    console.log("AAAA")
  }

  constructor(private http: HttpClient) {
  }


  public getJSON(): Observable<any> {
    return this.http.get("./assets/mydata.json");
  }

}
