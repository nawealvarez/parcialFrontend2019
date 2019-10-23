import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UsersService } from "../users.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private userService: UsersService, private router: Router) {

    this.form = new FormGroup(
      {
        name: new FormControl(''),
        email: new FormControl('',)
      }
    )
  }

  ngOnInit() {
  }

  onFormSubmitted() {
    const result = this.userService.addUser(this.form.value);
    if(result) {
      this.router.navigate(['/list'])
    }
  }
}
