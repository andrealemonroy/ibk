import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-pending-proposal',
    templateUrl: './pending-proposal.component.html',
    // styleUrls: ['./error-page.component.scss']
})

export class PendingProposalComponent implements OnInit {
    dataSource: any;
    displayedColumns: string[] = ['cmdl', 'cu', 'ruc', 'numerodocumento', 'status', 'enterDate', 'typeOp', 'dateTask'];
    constructor(
        private fb: FormBuilder,
    ){}
    ngOnInit(): void{}
    form: FormGroup = this.fb.group(
        {
          codeID: [''],
          documentIdNumber: '',
          documentIdName: '',
        },
      );
      listApplicationUsers(){}
      async getRowData(list: any){}
}