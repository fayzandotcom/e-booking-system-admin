import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appTitle:string;
  message:string;

  constructor() {
    this.appTitle = "<h1>E-Booking System</h1>";
    this.message = "<script>alert('hello world!')</script>"
  }

  ngOnInit() {
  }

}
