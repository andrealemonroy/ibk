import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientPresenter {
  userEdit$: Subject<any> = new Subject<any>();
  // userEdit: Object = {};
  constructor() {}

  get userEdit() {
    return this.userEdit$;
  }

}
