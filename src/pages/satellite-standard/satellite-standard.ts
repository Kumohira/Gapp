import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SatelliteStandardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-satellite-standard',
  templateUrl: 'satellite-standard.html',
})
export class SatelliteStandardPage {

  contact = {
    name: 'youssef',
    age: 26
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SatelliteStandardPage');
  }

}
