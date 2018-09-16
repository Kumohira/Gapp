import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Token} from '../model/token.model';

@Injectable()
export class AuthService {

  access_token: string;
  host = 'https://api.dmnstage.com';

  constructor(public http: HttpClient) {
  }

  authenticateUser(username, password) {
    let data = new HttpParams();
    data = data.set('username', username);
    data = data.set('password', password);
    data = data.set('grant_type', 'password');

    const clientId = 'Q2xpZW50QXBw';
    const secret = 'c2VjcmV0';
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(atob(clientId) + ':' + atob(secret)),
      'No-Auth': 'true'
    });
    return this.http.post<Token>(this.host + '/oauth/token', data, {headers: reqHeader})
  }
}
