import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['userDashboard']);
  }

  logout() {
    this.router.navigate(['login']);
  }

  startTest() {
    if(confirm("Are you ready to Start the test. ALL THE BEST !!"))
     this.router.navigate(['quiz']);
  }

}
