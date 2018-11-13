import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Chitima Train Booking';
  public constructor(private titleService: Title,  private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    //this.authenticationService.token;
  }
}
