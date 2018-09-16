import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SubproductService} from "../../services/subproduct.service";


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

  productId: number = 1;
  subProductId: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public subProductService: SubproductService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoudreStandardPage');
    this.subProductService.getImageTime(1)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      )
    ;
  }


}
