import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email = '';
  password = '';

  onSubmit(form: NgForm) {
    console.log('onSubmit ' + JSON.stringify(form.value));
  }
}
