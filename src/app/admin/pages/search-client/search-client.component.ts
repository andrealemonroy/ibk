import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientsService } from '../../services/clients.service';
import { ClientPresenter } from '../presenter/client.presenter';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss'],
})
export class SearchClientComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['sei', 'financialStatusPeriod', 'lastUpdate'];
  disabled: boolean = false;
  dataClient: any;
  serviceData: any;
  constructor(
    public dialogRef: MatDialogRef<SearchClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private clientsService: ClientsService,
    public clientPresenter: ClientPresenter
  ) {}
  ngOnInit(): void {}
  // form: FormGroup = new FormGroup({
  //     codeID: new FormControl(),
  //     documentIdType: new FormControl(),
  //     documentIdNumber: new FormControl()
  // })
  form: FormGroup = this.fb.group(
    {
      codeID: [''],
      documentIdNumber: '',
      documentIdName: '',
    },
    { validator: this.validate }
  );

  validate(formgroup: FormGroup) {
    if (
      formgroup.controls['codeID'].value ||
      formgroup.controls['documentIdNumber'].value
    ) {
      return { validate: true };
    } else {
      return null;
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  search() {
    console.log(this.form.value);
  }
  listApplicationUsers() {
    this.clientsService
      .getClients(this.form.value)
      .subscribe((clients) => (this.dataSource = clients));
  }
  resetForm() {
    this.form.reset();
  }
  isDisabled() {
    console.log(this.form.get('codeID'));
    if (this.form.get('codeID') !== null) {
      this.disabled = false;
    } else this.disabled = true;
  }
  async getRowData(list: any) {
    // this.clientPresenter.getUserEdit = {
    //   'codigounico': list.codigounico,
    //   'razonsocial': list.razonsocial,
    //   'numerodocumento': list.numerodocumento
    // };
    // this.clientPresenter.userEdit$.next({
    //   'codigounico': list.codigounico,
    //   'razonsocial': list.razonsocial,
    //   'numerodocumento': list.numerodocumento
    // })
    this.dataClient = {
      codeID: list.codigounico,
      razonsocial: list.razonsocial,
      documentIdNumber: list.numerodocumento,
    };

    // this.clientsService.getDataRating(this.dataClient).subscribe((res) => {
    //   try {
    //     this.dataClient = {
    //       requestNumber: "dummy",
    //       codeID: list.codigounico,
    //       razonsocial: list.razonsocial,
    //       documentIdNumber: list.numerodocumento,
    //       sei: res?.sei,
    //       rating: res?.scaleWithException,
    //       dateUpdateRating: res?.financialStatusPeriod,
    //       dateTestRating: res?.updateDate,
    //     };
    //   } catch (err) {
    //     console.log(err);
    //   }
    // });
    // console.log(this.serviceData)
    this.dialogRef.close({ event: 'close', data: this.dataClient });
    // this.dialogRef.close();
  }
}
