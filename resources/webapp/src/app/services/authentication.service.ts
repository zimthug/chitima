import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SERVER_API_URL, TOKEN_KEY } from '../../app/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {

    const data = {
      email: email,
      password: password
    };

    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };

    return this.http.post<any>(SERVER_API_URL + '/login', data, headers)
      .pipe(map(user => {
        if (user) {
          console.log(user.token);
          localStorage.setItem(TOKEN_KEY, user.token);
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  }

  get token() {
    return localStorage.getItem(TOKEN_KEY);
  }

  /*
  get isAuthenticated(): Observable<boolean> {
    return !!localStorage.getItem(TOKEN_KEY);
  }*/
}
