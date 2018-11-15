import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('myAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ])],
})
export class AppComponent implements OnInit {
  title = 'Chitima Train Booking';
  public constructor(private titleService: Title, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    //this.authenticationService.token;
  }
}
