import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit, AfterViewInit, OnDestroy {
  otpForm!: FormGroup;
  otpTimer!: number;
  otpTimerSubscription!: Subscription;
  isTimerRunning!: boolean;
  
 
  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.startOTPTimer();
    this.initOtpForm();
  }

  ngAfterViewInit(): void {
   
  }

  ngOnDestroy(): void {
    this.stopOTPTimer();
  }

  getFormattedTime(): string {
    const minutes: string = Math.floor(this.otpTimer / 60).toString().padStart(2, '0');
    const seconds: string = (this.otpTimer % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  startOTPTimer(): void {
    if (!this.isTimerRunning) {
      // you can set as per response timer second value
      this.otpTimer = 60; // Set the initial OTP timer value in seconds
      this.isTimerRunning = true;

      this.otpTimerSubscription = interval(1000).subscribe(() => {
        if (this.otpTimer > 0) {
          this.otpTimer--;
        } else {
          this.stopOTPTimer();
        }
      });
    }
  }

  stopOTPTimer(): void {
    if (this.isTimerRunning && this.otpTimerSubscription) {
      this.otpTimerSubscription.unsubscribe();
      this.isTimerRunning = false;
    }
  }

  initOtpForm(): void {
    this.otpForm = this.formBuilder.group({
      digit1: ['', Validators.required],
      digit2: ['', Validators.required],
      digit3: ['', Validators.required],
      digit4: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.otpForm.valid) {
      const otp = this.otpForm.value;
      console.log('OTP:', otp);
      // Perform further actions with the OTP
    }
  }

  switchLanguage(language: string): void {
    this.translateService.use(language);
  }

  
  handleInputChange(event: any, nextInputIndex?: number): void {
    const input = event.target;
    const maxLength = input.getAttribute('maxlength');

    if (input.value.length === +maxLength) {
      if (nextInputIndex) {
        
      } else {
        input.blur();
      }
    }
  }

  tabChange(val:any) {
    let ele = document.querySelectorAll('input');
    if(ele[val-1].value != '' && val < 4){
      ele[val].focus()
    } else if(ele[val-1].value == ''){
      ele[val-2].focus()
    }   
  }

  
}