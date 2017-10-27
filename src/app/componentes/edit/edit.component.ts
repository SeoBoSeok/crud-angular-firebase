import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../app.firebase.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class editComponent implements OnInit {

  private dataUser = {
    name: '',
    title: '',
    descripcion: '',
    keyz:''
  };

  private key:string;
  private loading:boolean = false;

  constructor(private _firebase:FirebaseService, private _activatedR:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._activatedR.params.subscribe(params => {
      this.dataUser.keyz = params['key'];
      this.key = params['key'];
      this._firebase.getData().subscribe(data => {
        // console.log(data[this.key].title);
        this.dataUser.name = data[this.key].name;
        this.dataUser.title = data[this.key].title;
        this.dataUser.descripcion = data[this.key].descripcion;
      })
    })
  }

  senddata(){
    this._firebase.insertEdit(this.key, this.dataUser).subscribe();
    this.loading = true;
    setTimeout( ()=> {
      this._router.navigate(['/data']);
    },3000)
    // this._router.navigate(['/data']);
  }

}
