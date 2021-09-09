import { User } from './../models/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: User;
  uname: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.uname = localStorage.getItem("uname");
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  apply() {
    this.router.navigate(['instructions']);
  }

  logout() {
    this.router.navigate(['login']);
  }

}
