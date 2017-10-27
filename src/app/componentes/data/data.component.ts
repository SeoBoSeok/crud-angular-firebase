import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../app.firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class dataComponent implements OnInit {

  private dataShow:any[] = [];
  private eliminate:boolean = false;

  constructor(private _firebase:FirebaseService, private _router:Router) { }

  ngOnInit() {
    this._firebase.getData().subscribe(data => {
      for (let key$ in data ){
        this.dataShow.push(data[key$]);
      }
    });

  }


  edit(keyz:string){
    this._router.navigate(['/edit/',keyz]);
  }

  elimination(keyz:string){
    this._firebase.eliminateDelete(keyz).subscribe();

    this.eliminate = true;

    setTimeout( () => {
      window.location.reload();
    },3000);
  }
}
