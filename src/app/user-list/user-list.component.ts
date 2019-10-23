import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

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
  constructor(private usersService: UsersService) {   }

  ngOnInit() {
  }

  remove(index) {
    this.usersService.remove(index);
  }

  removeAll() {
    this.usersService.removeAll();
  }

}
