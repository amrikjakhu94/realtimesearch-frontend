import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  users : any;
  constructor(private apiService: ApiService) { }

  getAllUsers(){
    this.apiService.getallusers().subscribe(
      allusers=>{
        this.users = allusers.data;
        console.log(this.users,'---');
      }
    )
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
