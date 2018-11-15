import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, first, catchError } from 'rxjs/operators';
//import {Http, Response} from "@angular/http";
//import 'rxjs/add/operator/map';

import { SERVER_API_URL } from '../app.constants';
import { IUser } from '../shared/models/user.model';

/*
type EntityResponseType = HttpResponse<IUser>;
type EntityArrayResponseType = HttpResponse<IUser[]>;*/


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user: IUser;

    constructor(private http: HttpClient) { }

    getUser() {
        return this.http.get(SERVER_API_URL + '/user').pipe(
            catchError((error: any) => Observable.throw(error))
        );
    }

    registerUser(user: IUser) {
        return this.http.post(SERVER_API_URL + '/register', user, httpOptions).pipe(
            catchError((error: any) => Observable.throw(error))
        );
    }
}
