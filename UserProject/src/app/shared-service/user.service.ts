import { Injectable } from '@angular/core';

import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {User} from '../user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';


@Injectable()
export class UserService {

  private base_url = "http://localhost:8080";
  userDetails :any;

  constructor(private _http: Http) {
  }

  getUserDetails() {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = new RequestOptions({headers: headers});

    return this._http.get(this.base_url + '/getUserDetails', options).map(success => success.json(),this.userDetails)
      .catch(this.handleError);

  }

  getUpdateUser(user:User): Observable<User>{
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('content-type', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.put(this.base_url + '/updateUser', JSON.stringify(user), options).map(success => success.status)
      .catch(this.handleError);

  }

  getCraeteUser(user:User): Observable<number> {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('content-type', 'application/json');

    let options = new RequestOptions({headers: headers});

    return this._http.post(this.base_url + '/insertUser', JSON.stringify(user), options).map(success => success.status)
      .catch(this.handleError);

  }

  getdeleteUser(id:number): Observable<number> {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = new RequestOptions({headers: headers});
    return this._http.delete(this.base_url + '/deleteUsers/'+id, options).map(success => success.status)
      .catch(this.handleError);

  }

  getUserDetailsbyId(id:number): Observable<number>{
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = new RequestOptions({headers: headers});
    return this._http.delete(this.base_url + '/getUsersById/'+id, options).map(success => success.json())
      .catch(this.handleError);

  }


  handleError(error:Response){
    return Observable.throw(error);
  }
}
