import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { NewProposalComponent } from "./pages/new-proposal/new-proposal.component";
import { PendingProposalComponent } from "./pages/pending-proposal/pending-proposal.component";
import { SearchProposalComponent } from "./pages/search-proposal/search-proposal.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from "./pages/home/home.component";
import { SearchClientComponent } from "./pages/search-client/search-client.component";
@NgModule({
    declarations: [
        NewProposalComponent,
        SearchProposalComponent,
        PendingProposalComponent,
        HomeComponent,
        SearchClientComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class AdminModule {}