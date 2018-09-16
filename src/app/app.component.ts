import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {RadarStandardPage} from "../pages/radar-standard/radar-standard";
import {RadarDeveloppePage} from "../pages/radar-developpe/radar-developpe";
import {FoudreStandardPage} from "../pages/foudre-standard/foudre-standard";
import {SatelliteStandardPage} from "../pages/satellite-standard/satellite-standard";
import {SatelliteDeveloppePage} from "../pages/satellite-developpe/satellite-developpe";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  menus = [
    {title: 'Home', component: HomePage},
    {title: 'Satellite Standard', component: SatelliteStandardPage},
    {title: 'Satellite Developpe', component: SatelliteDeveloppePage},
    {title: 'Radar Standard', component: RadarStandardPage},
    {title: 'Radar Developpé', component: RadarDeveloppePage},
    {title: 'Foudre Standard', component: FoudreStandardPage}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(item: any) {
    this.rootPage = item.component;
  }
}

