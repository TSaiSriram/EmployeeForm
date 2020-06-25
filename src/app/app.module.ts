import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SubmitDocsComponent } from './components/submit-docs/submit-docs.component';
import { LoginComponent } from './components/login/login.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule } from "angular-oauth2-oidc";
import { SendMailComponent } from './components/send-mail/send-mail.component';
@NgModule({

  declarations: [
    AppComponent,
    SubmitDocsComponent,
    LoginComponent,
    SendMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule, FormsModule, ClarityModule, BrowserAnimationsModule, OAuthModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
