import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AccordionComponent } from '../../components/accordion/accordion';
import { BacklogPage } from './backlog';

@NgModule({
  declarations: [
    BacklogPage,
    AccordionComponent
  ],
  imports: [
    IonicPageModule.forChild(BacklogPage),
  ],
})
export class BacklogPageModule {}
