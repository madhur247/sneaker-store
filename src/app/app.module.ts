import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { MaterialModule } from './material.module';
import { ProductModule } from './product/product.module';
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MaterialModule,
    FormsModule,
    ProductModule,
    AuthModule,
    CartModule
  ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
