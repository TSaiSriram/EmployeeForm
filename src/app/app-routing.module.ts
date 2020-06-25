import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SubmitDocsComponent } from './components/submit-docs/submit-docs.component';
import { SendMailComponent } from './components/send-mail/send-mail.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: SubmitDocsComponent },
  { path: 'mail', component: SendMailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
