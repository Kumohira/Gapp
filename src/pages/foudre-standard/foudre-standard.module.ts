import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FoudreStandardPage} from './foudre-standard';

@NgModule({
  declarations: [
    FoudreStandardPage,
  ],
  imports: [
    IonicPageModule.forChild(FoudreStandardPage),
  ],
})
export class FoudreStandardPageModule {
}
