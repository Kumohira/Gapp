import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Subproduct} from "../../model/subproduct.model";

/**
 * Generated class for the SubproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subproduct',
  templateUrl: 'subproduct.html',
})
export class SubproductPage {

  selectedItem: Subproduct = new Subproduct();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('subProduct');
    console.log(this.selectedItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubproductPage');

  }

}
