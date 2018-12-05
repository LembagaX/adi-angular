import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public emailControl: FormControl;
  public passwordControl: FormControl;
  public gravatar: String;

  constructor(
    public snackbar: MatSnackBar
  ) {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.passwordControl = new FormControl('', [
      Validators.required
    ]);

    this.gravatar = 'admin@example.com';
  }

  public submit() {
    this.evaluateForm();
  }

  private evaluateForm() {
    if (this.emailControl.hasError('required') || this.passwordControl.hasError('required')) {
      this.passwordControl.markAsTouched();
      this.snackbar.open('Credentials required', 'close', {
        duration: 5000
      });
    }
  }

}
