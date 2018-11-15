import { Component, OnInit } from '@angular/core';
import { map, first, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UserService } from '../../services/user.service';
import { IUser } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private userService: UserService) { }

  //user: IUser;
  private user: Array<object> = [];

  ngOnInit() {
    this.getUserData();
  }

  public getUserData() {
    this.userService.getUser().subscribe((data: Array<object>) => {
      this.user = data["user"];
    });
  }
}
