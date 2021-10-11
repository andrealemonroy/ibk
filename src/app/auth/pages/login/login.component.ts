import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;
  email = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(6), Validators.pattern("[a-zA-Z0-9]*")]);
  password = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(6), Validators.pattern("[a-zA-Z0-9]*")]);
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
  }
  getPassErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Campo requerido'
    } else if (this.password.hasError('pattern') || this.password.hasError('minlength') || this.password.hasError('maxlength')) { return 'No es una contraseña válida' } else return ''
  }
  getUserErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo requerido'
    } else if (this.email.hasError('pattern') || this.email.hasError('minlength') || this.email.hasError('maxlength')) { return 'No es un usuario válido' } else return ''

  }
  async onSubmit(): Promise<void> {
    this.router.navigate(['./admin'])
    // this.loginInvalid = false;
    // this.formSubmitAttempt = false;
    // if (this.form.valid) {
    //   try {
    //     const username = this.form.get('username')?.value;
    //     const password = this.form.get('password')?.value;
    //     await this.authService.login(username, password);
    //   } catch (err) {
    //     this.loginInvalid = true;
    //   }
    // } else {
    //   this.formSubmitAttempt = true;
    // }
  }
}
