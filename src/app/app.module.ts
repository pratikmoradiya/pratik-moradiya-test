import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { i18nConfig, setupTranslateService } from './i18n.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlyDigitDirective } from './directives/only-digit.directive';


@NgModule({
  declarations: [
    AppComponent,
    OnlyDigitDirective,
    OtpVerificationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(i18nConfig),
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: setupTranslateService,
    deps: [TranslateService],
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
