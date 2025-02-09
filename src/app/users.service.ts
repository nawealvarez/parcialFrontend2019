import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = [
    {
      name: 'Andres',
      email: 'andres@hotmail.com',
      roles: ['admin', 'schedule', 'read']
    },
    {
      name: 'Jose',
      email: 'jose@hotmail.com',
      roles: [ 'schedule', 'read']
    },
    {
      name: 'Juan',
      email: 'juan@gmail.com',
      roles: [ 'read']
    },
    {
      name: 'Pedro',
      email: 'pedro@gmail.com',
      roles: [ 'write']
    }
  ];
  public readonly roles = ['admin', 'schedule', 'read', 'write'];
  constructor() { }

  getUsers(){
    return this.users;
  }
  addUser(user) {
    this.users.push(user)
    return true
  }
  remove(index) {
    this.users.splice(index, 1);
  }

  public removeAll() {
    this.users.splice(0, this.users.length);
  }
}
