import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SubproductService} from "../../services/subproduct.service";
import {ProductService} from "../../services/product.service";
import {Product} from "../../model/product.model";
import {Subproduct} from "../../model/subproduct.model";
import {SubproductPage} from "../subproduct/subproduct";

/**
 * Generated class for the FoudreStandardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foudre-standard',
  templateUrl: 'foudre-standard.html',
})
export class FoudreStandardPage {

  productId: number = 5;
  product: Product = new Product();

  constructor(public navCtrl: NavController, public navParams: NavParams, public subProductService: SubproductService, public productService: ProductService) {

    this.productService.getProduct(this.productId)
      .subscribe(
        (data: Product) => {
          this.product = data;
        },
        (err) => {
          console.log(err);
        }
      )
    ;

    // this.subProductService.getImageTime(1)
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   )
    // ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoudreStandardPage');
  }

  itemSelected(item: Subproduct) {
    this.navCtrl.push(
      SubproductPage,
      {
        subProduct: item
      }
    );
    // this.nav.setRoot(ProductPage ,{
    //   product: page.product
    // });
  }

}
