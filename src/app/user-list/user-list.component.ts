import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   
 
  public users = [
    {
      name: 'Andres',
      email: 'andres@hotmail.com',
      roles: ['admin']
    },
    {
      name: 'Pepe',
      email: 'pepe@hotmail.com',
      roles: [ 'write', 'read']
    },
    {
      name: 'Nico',
      email: 'nico@gmail.com',
      roles: [ 'read']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
