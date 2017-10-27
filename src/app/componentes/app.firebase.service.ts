import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http } from "@angular/http";

@Injectable()
export class FirebaseService {

  constructor(private _http:Http) { }

  restPost(dataUser:any){

    let urlPost = 'https://angular-crud-rest.firebaseio.com/data.json';
    let body = JSON.stringify(dataUser);

    return this._http.post(urlPost,body).map(res => {
      console.log(res.json());
      return res.json();
    })

  }

  restPut(key:string, dataUser:any){
    let urlPut = `https://angular-crud-rest.firebaseio.com/data/${key}.json`;
    let body = JSON.stringify(dataUser);

    return this._http.put(urlPut,body).map(res => {
      console.log(res.json());
    })
  }

  getData(){
    let urlGet = 'https://angular-crud-rest.firebaseio.com/data.json';

    return this._http.get(urlGet).map(res => {
      return res.json();
    })
  }

  insertEdit(key:string, dataUser:any){
    let urledit:string = `https://angular-crud-rest.firebaseio.com/data/${key}.json`;
    let body = JSON.stringify(dataUser);

    return this._http.put(urledit,body).map(res=>{
      console.log(res.json());
    })
  }

  eliminateDelete(keyz:string){

    let urlDelete:string = `https://angular-crud-rest.firebaseio.com/data/${keyz}.json`;

    return this._http.delete(urlDelete).map(res => {
      console.log(res.json())
    })
  }

}
