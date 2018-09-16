import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RadarDeveloppePage} from './radar-developpe';

@NgModule({
  declarations: [
    RadarDeveloppePage,
  ],
  imports: [
    IonicPageModule.forChild(RadarDeveloppePage),
  ],
})
export class RadarDeveloppePageModule {
}
