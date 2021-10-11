import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components */
// import { LoginComponent } from './login/login.component';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatIconModule} from '@angular/material/icon';
// import { HomeComponent } from './home/home.component';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatDialogModule} from "@angular/material/dialog";
// import { ExampleDialogModule } from './modals/search-client.module';
// import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
