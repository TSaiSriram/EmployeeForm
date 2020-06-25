import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin + '/login',
  clientId: "732893189599-uvvnb1g14pa3kjh8chtrbdf74efs9it6.apps.googleusercontent.com",
  scope: 'openid profile email https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/user.phonenumbers.read https://www.googleapis.com/auth/user.birthday.read',
  strictDiscoveryDocumentValidation: false
};
