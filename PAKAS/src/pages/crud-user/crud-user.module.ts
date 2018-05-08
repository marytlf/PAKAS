import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudUserPage } from './crud-user';

@NgModule({
  declarations: [
    CrudUserPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudUserPage),
  ],
})
export class CrudUserPageModule {}
