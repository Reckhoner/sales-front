import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './presentation/layout/layout.module';
import { appEffects, appReducer } from './domain/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // Import the StoreDevtoolsModule
import { CoreModule } from './core/core.module';
import { KpiComponent } from './presentation/features/components/kpi/kpi.component';
import { OrdersComponent } from './presentation/features/components/orders/orders.component';
import { ProductsComponent } from './presentation/features/components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    KpiComponent,
    OrdersComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
