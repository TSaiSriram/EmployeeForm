import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SubmitDocsComponent } from './components/submit-docs/submit-docs.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'submit', component: SubmitDocsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
