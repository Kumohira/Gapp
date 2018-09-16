import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class ProductService {

  currentProduct: any;

  constructor(public http: HttpClient, public authservice: AuthService) {
  }

  getProducts() {
    return this.http.get(this.authservice.host + '/products');
  }

  getProduct(id: number) {
    return this.http.get(this.authservice.host + '/products/' + id);
  }
}
