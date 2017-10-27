import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {FirebaseService} from "../app.firebase.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styles: []
})
export class InsertComponent implements OnInit {

  private dataUser = {
    name: '',
    title: '',
    descripcion:'',
    keyz: '',
  };

  private spinner:boolean = false;
  private msgError:boolean = false;
  private msgSucces:boolean = false;


  constructor(private _firebase:FirebaseService, private _activatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
  }

  senddata(){
    //사용자 완료 시점 확인

    if(this.dataUser.name.length >=3 && this.dataUser.title.length >=3){
      //Spiner 효과.
      setTimeout( () =>{
        this.spinner = true;
      });
      setTimeout( () =>{
        this.spinner = false;
      },3000);

      this._firebase.restPost(this.dataUser).subscribe(data => {
        this.dataUser.keyz = data.name;
        this._firebase.restPut(this.dataUser.keyz, this.dataUser).subscribe();
      });

      this.msgError = false;

      setTimeout( () =>{
        this.msgSucces = true;
      },3000);

      setTimeout( () =>{
        this._router.navigate(['/data']);
      },10000);
    } else{
      this.msgError = true;

    }

  }

}
