import { NgModule , APP_INITIALIZER, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { AppConfigService } from './app-config.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from './features/user-management/user-management.component';
import { UserslistComponent } from './features/userslist/userslist.component';
import { AlgoDeploymentComponent } from './features/algo-deployment/algo-deployment.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddUserComponent } from './features/add-user/add-user.component';
import { EditUserComponent } from './features/edit-user/edit-user.component';
import { DeauthorizeUserComponent } from './features/deauthorize-user/deauthorize-user.component';
import { DeleteUserComponent } from './features/delete-user/delete-user.component';


const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
}; 


@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    UserslistComponent,
    AlgoDeploymentComponent,
    AddUserComponent,
    LoginComponent,
    EditUserComponent,
    DeauthorizeUserComponent,
    DeleteUserComponent,
   
      
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    RouterModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
