import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {FoudreStandardPage} from "../pages/foudre-standard/foudre-standard";
import {RadarStandardPage} from "../pages/radar-standard/radar-standard";
import {RadarDeveloppePage} from "../pages/radar-developpe/radar-developpe";
import {SatelliteStandardPage} from "../pages/satellite-standard/satellite-standard";
import {SatelliteDeveloppePage} from "../pages/satellite-developpe/satellite-developpe";
import {AuthService} from "../services/auth.service";
import {ProductService} from "../services/product.service";
import {SubproductService} from "../services/subproduct.service";
import {HttpClientModule} from "@angular/common/http";
import {TestProvider} from '../providers/test/test';
import {SubproductPage} from "../pages/subproduct/subproduct";

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    FoudreStandardPage,
    RadarStandardPage,
    RadarDeveloppePage,
    SatelliteStandardPage,
    SatelliteDeveloppePage,
    SubproductPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    FoudreStandardPage,
    RadarStandardPage,
    RadarDeveloppePage,
    SatelliteStandardPage,
    SatelliteDeveloppePage,
    SubproductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    AuthService,
    ProductService,
    SubproductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestProvider
  ]
})
export class AppModule {
}
