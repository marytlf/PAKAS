import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileCrudPage } from './profile-crud';

@NgModule({
  declarations: [
    ProfileCrudPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileCrudPage),
  ],
})
export class ProfileCrudPageModule {}
