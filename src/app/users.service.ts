import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers() {
    return this.users;
  } 
  
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
  constructor(private http: HttpClient) { }
}
