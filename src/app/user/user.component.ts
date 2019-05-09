import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['fayzan', [
        Validators.required
      ]],
      lastName: '',
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ''
    });

  }

}
