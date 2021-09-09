import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Login } from './../models/login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  user: User;
  showErrorMessage = false;

  constructor(private service: UserService, private router: Router) { 
    this.login = new Login();
  }

  ngOnInit(): void {
    localStorage.setItem("user", null);
  }

  async loggedIn() {
    
    await this.service.login(this.login).then(data => {this.user = data},
      (error) => {
        this.showErrorMessage = true;
      });

      if(this.user == null) this.showErrorMessage = true;

    localStorage.setItem("user", JSON.stringify(this.user));
    localStorage.setItem("uname", this.user.name);
    this.router.navigate(['userDashboard']);
  }

  register() {
    this.router.navigate(['register']);
  }

}
