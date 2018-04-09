import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminLoginPage } from './admin-login';

@NgModule({
  declarations: [
    AdminLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminLoginPage),
  ],
})
export class AdminLoginPageModule {}
