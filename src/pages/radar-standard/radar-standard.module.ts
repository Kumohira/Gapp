import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RadarStandardPage} from './radar-standard';

@NgModule({
  declarations: [
    RadarStandardPage,
  ],
  imports: [
    IonicPageModule.forChild(RadarStandardPage),
  ],
})
export class RadarStandardPageModule {
}
