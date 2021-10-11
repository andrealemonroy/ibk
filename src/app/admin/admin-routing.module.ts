import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NewProposalComponent } from "./pages/new-proposal/new-proposal.component";
import { PendingProposalComponent } from "./pages/pending-proposal/pending-proposal.component";
import { SearchProposalComponent } from "./pages/search-proposal/search-proposal.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'search-proposal',
                component: SearchProposalComponent
            },
            {
                path: 'new-proposal',
                component: NewProposalComponent
            },
            {
                path: 'pending-proposal',
                component: PendingProposalComponent
            },
            {
                path: '**',
                redirectTo: 'new-proposal'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}