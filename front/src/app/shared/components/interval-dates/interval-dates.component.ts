import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subscription } from 'rxjs';
import { isUndefined } from 'util';

@Component({
  selector: 'cba-interval-dates',
  templateUrl: './interval-dates.component.html',
  styleUrls: ['./interval-dates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: IntervalDatesComponent,
      multi: true,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IntervalDatesComponent,
      multi: true,
    },
  ],
})
export class IntervalDatesComponent
  implements OnInit, ControlValueAccessor, OnChanges, OnDestroy {
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() min: Date;
  @Input() max: Date;
  @Input() inline: boolean = false;

  formGroup: FormGroup;
  startDateConstraints: { max: Date; min: Date } = {
    min: undefined,
    max: undefined,
  };
  endDateConstraints: { max: Date; min: Date } = {
    min: undefined,
    max: undefined,
  };

  private startDateSubscrition: Subscription;
  private endDateSubscrition: Subscription;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.updateConstraintsWhenValuesChanges();
  }

  ngOnDestroy(): void {
    if (!isUndefined(this.startDateSubscrition)) {
      this.startDateSubscrition.unsubscribe();
    }
    if (!isUndefined(this.endDateSubscrition)) {
      this.endDateSubscrition.unsubscribe();
    }
  }

  ngOnChanges(): void {}

  writeValue(value: { dateDebut: Date; dateFin: Date }) {
    this.formGroup.patchValue({
      dateDebut: this.startDate,
      dateFin: this.endDate,
    });
  }

  registerOnChange(fn: (value: any) => void) {
    this.formGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched() {}

  private buildForm(): void {
    this.formGroup = this.fb.group({
      dateDebut: [''],
      dateFin: [''],
    });
  }

  private updateConstraintsWhenValuesChanges(): void {
    this.startDateSubscrition = this.startDateControl.valueChanges.subscribe(
      (date: Date) => {
        this.endDateConstraints.min = date;
        if (this.min) {
          this.startDateConstraints.min = this.min;
        }
      },
    );
    this.endDateSubscrition = this.endDateControl.valueChanges.subscribe(
      (date: Date) => {
        this.startDateConstraints.max = date;
        if (this.max) {
          this.endDateConstraints.max = this.max;
        }
      },
    );
  }

  private get startDateControl(): AbstractControl {
    return this.formGroup.get('dateDebut') as FormControl;
  }

  private get endDateControl(): AbstractControl {
    return this.formGroup.get('dateFin') as FormControl;
  }
}
