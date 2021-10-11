import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./pages/login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialModule } from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class AuthModule {}