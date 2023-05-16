import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
// added routes if in feature have authentication user you can make can active gard services, for authentication and authorization role based users
const routes: Routes = [
  {path: '', redirectTo: 'otp-verification', pathMatch: 'full'},
  {path: 'otp-verification', component: OtpVerificationComponent},
  {path: '**', component: OtpVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
