import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ServerService } from 'src/app/server.service';
import { Credential } from 'src/app/interfaces/credential';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public gravatar: String;
  public disabled: Boolean;
  public emailControl: FormControl;
  public passwordControl: FormControl;
  public buttonOptions: MatProgressButtonOptions;

  constructor(
    public snackbar: MatSnackBar,
    public server: ServerService,
    private auth: AuthService,
    private router: Router
  ) {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.passwordControl = new FormControl('', [
      Validators.required
    ]);

    this.buttonOptions = {
      active: false,
      text: 'Login',
      spinnerSize: 19,
      raised: true,
      stroked: true,
      buttonColor: 'primary',
      spinnerColor: 'accent',
      fullWidth: false,
      disabled: false,
      mode: 'indeterminate',
    };

    this.gravatar = '';
    this.disabled = false;
  }

  public submit() {
    this.evaluateForm();
    this.sendForm();
  }

  private evaluateForm() {
    this.gravatar = this.emailControl.value;
    if (this.emailControl.hasError('required') || this.passwordControl.hasError('required')) {
      this.passwordControl.markAsTouched();
      this.snackbar.open('Credentials required', 'close', {
        duration: 5000
      });
    }
  }

  private sendForm() {
    this.toggleButton(true);
    const credential: Credential = {
      user: {
        email: this.emailControl.value,
        password: this.passwordControl.value
      }
    };
    this.server.generateToken(credential)
      .subscribe(response => {
        switch (response.code) {
          case 203:
            this.toggleButton(false);
            this.passwordControl.reset();
            this.snackbar.open('Wrong email or password', 'close', {
              duration: 5000
            });
            break;
          case 200:
            const user: User = {
              name: response.user.name,
              email: response.user.email,
              token: response.token
            };
            this.auth.login(user);
            this.router.navigate(['/dashboard']);
            break;
          default:
            this.toggleButton(false);
            this.passwordControl.reset();
            this.snackbar.open('Unknown error occure', 'close', {
              duration: 5000
            });
            break;
        }
      });
  }

  private toggleButton(value: boolean) {
    this.buttonOptions.active = value;
  }
}
