import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User;

  constructor(private router: Router, private service : UserService) { }

  ngOnInit() {
  }

  saveUser() {
    this.service.register(this.user);
    this.user = new User();
    confirm("Registered Successfully! Proceed to login.")
    this.router.navigate(['login']);
  }
}
