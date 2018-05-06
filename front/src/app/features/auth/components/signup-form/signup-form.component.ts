import {Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationProfile} from '../../models/authentication-profile.model';

@Component({
  selector: 'pulpe-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupFormComponent implements OnInit {
  @Output() signup: EventEmitter<AuthenticationProfile> = new EventEmitter<AuthenticationProfile>();

  formGroup: FormGroup;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSignup(): void {
    this.signup.emit(this.formGroup.value);
  }

  private buildForm(): void {
    this.confirmPasswordCtrl = this.fb.control('', [Validators.required, Validators.minLength(6)]);
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      isCoach: ['', Validators.required],
      passwordForm: this.fb.group({
          password: this.passwordCtrl,
          confirmPassword: this.confirmPasswordCtrl
        }, {validator: SignupFormComponent.passwordMatch}
      )
    });
  }

  static passwordMatch(group: FormGroup) {
    const password = group.get('password').value;
    const confirm = group.get('confirmPassword').value;
    return password === confirm ? null : {matchingError: true};
  }

}
