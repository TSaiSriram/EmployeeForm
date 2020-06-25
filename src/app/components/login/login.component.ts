import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../../sso.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
// import { SubmitDocsComponent } from '../submit-docs/submit-docs.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: any;
  acces_token: string;
  validateToken: any = false;
  constructor(private oauthService: OAuthService, private router: Router, private loginService: LoginService) {
    this.configureSSO();
  }
  ngOnInit() {
  }


  configureSSO() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  Login() {
    this.oauthService.initImplicitFlow();
  }
  Logout() {
    this.oauthService.logOut();
  }
  get token() {
    this.userData = this.oauthService.getIdentityClaims();
    // this.userData = { ...this.userData, token: this.oauthService.getAccessToken() }
    this.acces_token = this.oauthService.getAccessToken();
    this.validateToken = this.acces_token !== null ? true : false;
    return this.userData ? this.userData : null;
  }
}

