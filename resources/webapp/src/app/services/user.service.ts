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

    private resourceUrl = SERVER_API_URL + '/user';

    constructor(private http: HttpClient) { }

    //constructor(private http: Http) {}

    /*
    getUserData(): Observable<EntityArrayResponseType> {
      //const options = "";
      return this.http.get(this.resourceUrl).pipe(first()).subscribe((res) => {
        
      });  
    }*/

    /* Compiled
    getUserData(): Observable<IUser> {
        return this.http.get<IUser>(this.resourceUrl);
    }*/


    //getUserData(): Observable<IUser> {
    getUserData() {
        return this.http.get(this.resourceUrl).pipe(
            catchError((error: any) => Observable.throw(error))
        );
    }
}
