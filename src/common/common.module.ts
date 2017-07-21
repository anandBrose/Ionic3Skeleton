import { NgModule } from '@angular/core';
import { LoginModule } from '../login/login.module'
import { HomeModule } from '../home/home.module'
import { ContactModule } from '../contact/contact.module'
import { TabsModule } from '../tabs/tabs.module'
import { UtilsProvider } from "./providers/utils.provider";


@NgModule({
  declarations: [
  ],
  providers:  [ UtilsProvider ],
  imports: [
  	LoginModule,
  	HomeModule,
  	ContactModule,
    TabsModule
  ],
  exports: [
  	LoginModule,
  	HomeModule,
  	ContactModule,
    TabsModule
  ]
})
export class CommonModule {}
