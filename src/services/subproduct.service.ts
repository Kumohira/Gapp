import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Token} from "../model/token.model";
import {mergeMap} from "rxjs/operators";

@Injectable()
export class SubproductService {

  currentSubProduct: any;
  currentProduct: any;

  constructor(public http: HttpClient, public authservice: AuthService) {
  }

  getSubProducts() {
    return this.authservice.authenticateUser('client1', 654321)
      .pipe(
        mergeMap(
          (data: Token) => {
            return this.http.get(this.authservice.host + '/subproducts?access_token=' + data.access_token);
          }
        )
      )
      ;
  }

  getSubProduct(id: number) {
    return this.authservice.authenticateUser('client1', 654321)
      .pipe(
        mergeMap(
          (data: Token) => {
            return this.http.get(this.authservice.host + '/subproducts/' + id + '?access_token=' + data.access_token);
          }
        )
      )
      ;
  }

  getImageTime(subProductId: number) {
    return this.authservice.authenticateUser('client1', 654321)
      .pipe(
        mergeMap(
          (data: Token) => {
            return this.http.get(this.authservice.host + '/imagetime2/' + subProductId + '?access_token=' + data.access_token);
          }
        )
      )
      ;
  }
}
