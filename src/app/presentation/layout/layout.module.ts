import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { BaseLoggedComponent } from './base-logged/base-logged.component';
import { RouterModule } from '@angular/router';
import { BaseAuthComponent } from './base-auth/base-auth.component';



@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
    NavbarComponent,
    LogoComponent,
    BaseLoggedComponent,
    BaseAuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutModule { }
