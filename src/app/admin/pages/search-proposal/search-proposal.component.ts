import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ClientsService } from "../../services/clients.service";
@Component({
    selector: 'app-search-proposal',
    templateUrl: './search-proposal.component.html',
    // styleUrls: ['./error-page.component.scss']
})

export class SearchProposalComponent implements OnInit {
    dataSource: any;
    executivePerson: string[] = [];
    statusProposals: string[] = [];
    displayedColumns: string[] = ['cmdl', 'cu', 'ruc', 'numerodocumento', 'status', 'enterDate', 'typeOp', 'dateTask'];
    constructor(
        private fb: FormBuilder,
        public clientService: ClientsService,
    ){}
    ngOnInit(): void{
      this.clientService.getOptionsProposalStatus().subscribe(res => {
        res.map((itemStatus: { descripcion: string; }) => {
          console.log(itemStatus.descripcion)
          this.statusProposals.push(itemStatus.descripcion)
        })
      })
      this.clientService.getOptionsBusinessPerson() .subscribe(res => {
        res.map((item: { nombres: string; }) => {
          this.executivePerson.push(item.nombres)
        })
      })
    }
    
    form: FormGroup = this.fb.group(
        {
          codeID: [''],
          executivePerson: '',
          statusProposal: '',
          documentIdNumber: '',
          documentIdName: '',
        },
      );
      listApplicationUsers(){}
      async getRowData(list: any){}
}
