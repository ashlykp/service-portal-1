import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { AppConfigService } from 'src/app/app-config.service';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import jwt_decode from "jwt-decode";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  claims: any = {};
  envConfig: any = {};

  auth: OAuthService | undefined;

  constructor(private oauthService: OAuthService, private appConfigService: AppConfigService) {

    try {
      this.envConfig = appConfigService.getConfig();
      const authConfig: AuthConfig = this.envConfig.AuthInfo;
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.tryLogin();
    } catch (e) {
      console.error(e);
    }
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  isTokenExpired() {
    let token = this.getCookie("id_token");
    console.log("token", token);
    let decoded: any;
    decoded = jwt_decode(token);
    console.log(decoded['exp'] + " " + Math.floor((new Date).getTime() / 1000))
    if ((decoded != undefined || decoded['exp'] != undefined) && decoded['exp'] < Math.floor((new Date).getTime() / 1000))
      return true;
    else
      return false;
  }

  public getCookie(name: string) {
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName = `${name}=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  getToken() {
    this.oauthService.getAccessToken();
  }
  // apiBaseURL = environment.apiBaseURL;

  // constructor(private http: HttpClient) { }


  // // On Return, expecting the token in the response body
  // login(credentials : User): Observable<any> {
  //   return this.http.post(environment.apiBaseURL + 'signin', {
  //     username: credentials.username,
  //     password: credentials.password
  //   }, httpOptions);
  // }

  // register() goes here
}

