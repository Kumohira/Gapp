import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SatelliteStandardPage} from './satellite-standard';

@NgModule({
  declarations: [
    SatelliteStandardPage,
  ],
  imports: [
    IonicPageModule.forChild(SatelliteStandardPage),
  ],
})
export class SatelliteStandardPageModule {
}
