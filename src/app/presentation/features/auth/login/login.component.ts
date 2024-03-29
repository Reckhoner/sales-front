import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '@app/core/models/auth.model';
import { AuthFacade } from '@app/facade/auth.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm: FormGroup;
loadingLogin$: Observable<boolean>;
loginError$: Observable<string | null>;

constructor(
  private formBuilder: FormBuilder,
  private authFacade: AuthFacade,
  ) {
  this.loginForm = this._initForm();
  this.loadingLogin$ = this.authFacade.isLoading$;
  this.loginError$ = this.authFacade.isError$;
 }

ngOnInit(): void {
}

onSubmitForm() {
  if(this.loginForm.invalid) {
    console.log('Invalid Form');
  }
  const data: ILogin = {...this.loginForm.value};
  this.authFacade.login(data);
  console.log(data)
}

private _initForm() {
  return this.loginForm = this.formBuilder.group({
    identifier: [
      '',
      Validators.compose([Validators.required, Validators.email]),
    ],
    password: [ '', Validators.required ],
  });
}

}
