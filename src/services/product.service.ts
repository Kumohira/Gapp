import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {mergeMap} from "rxjs/operators";
import {Token} from "../model/token.model";
import {Product} from "../model/product.model";

@Injectable()
export class ProductService {


  clientProduct: Product[] = [];
  selectedProduct: Product = new Product();

  constructor(public http: HttpClient, public authservice: AuthService) {
  }

  getProducts() {
    return this.authservice.authenticateUser('client1', 654321)
      .pipe(
        mergeMap(
          (data: Token) => {
            return this.http.get(this.authservice.host + '/products?access_token=' + data.access_token);
          }
        )
      )
      ;
  }

  getProduct(id: number) {
    return this.authservice.authenticateUser('client1', 654321)
      .pipe(
        mergeMap(
          (data: Token) => {
            return this.http.get(this.authservice.host + '/products/' + id + '?access_token=' + data.access_token);
          }
        )
      )
      ;
  }

  getProductsByClient(username: String) {
    return this.authservice.authenticateUser('client1', 654321)
      .pipe(
        mergeMap(
          (data: Token) => {
            return this.http.get(this.authservice.host + '/productsbyclient/' + username + '?access_token=' + data.access_token);
          }
        )
      )
      ;
  }
}
