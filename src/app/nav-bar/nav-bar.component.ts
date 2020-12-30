import { Component, OnInit } from '@angular/core';
import { AltertyfyService } from '../services/altertyfy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedinUser: string;
  constructor(private alertifyService: AltertyfyService) {}

  ngOnInit(): void {}
  loggedIn() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }
  onLogout() {
    localStorage.removeItem('token');
    this.alertifyService.success('You are logged Out !!');
  }
}
