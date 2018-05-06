import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationProfile} from '../../models/authentication-profile.model';

@Component({
  selector: 'pulpe-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninFormComponent implements OnInit {
  @Output() signin: EventEmitter<AuthenticationProfile> = new EventEmitter<AuthenticationProfile>();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      password: [Validators.required, Validators.minLength(6)],
      rememberMe: [false]
    });
  }

  onSignin() : void {
    this.signin.emit(this.formGroup.value);
  }
}
