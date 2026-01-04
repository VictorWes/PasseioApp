import { AuthConfig } from 'angular-oauth2-oidc';

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId:
    '465830527100-s3um64ldn2pkev35tjg9pchdo4aaena4.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};
