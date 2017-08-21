import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

//PrimeNG Imports
import { FileUploadModule, 
         InputTextModule,
         InputMaskModule,
         PanelModule,
         ButtonModule,
         MessagesModule,
         GrowlModule,
         MenuModule,
         DataTableModule,
         SharedModule,
         ConfirmDialogModule, ConfirmationService,
         SplitButtonModule
       } from 'primeng/primeng';

//Component Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { UploadClientComponent } from './components/upload-client/upload-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Service Imports
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { HttpService } from './services/http.service';
import { ClientService } from './services/client.service';
import { AuthGuard } from './guards/auth.guard';



const appRoutes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'upload', component: UploadClientComponent, canActivate: [AuthGuard]},
  {path: 'add', component: AddClientComponent, canActivate: [AuthGuard]},
  {path: 'client/:id', component: ClientDetailComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditClientComponent, canActivate: [AuthGuard]},
  {path: 'password/:id', component: ChangePasswordComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailComponent,
    UploadClientComponent,
    AddClientComponent,
    EditClientComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    ChangePasswordComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    FileUploadModule,
    InputTextModule,
    InputMaskModule,
    PanelModule,
    ButtonModule,
    MessagesModule,
    GrowlModule,
    MenuModule,
    DataTableModule,
    SharedModule,
    ConfirmDialogModule,
    SplitButtonModule
  ],
  providers: [
    AuthService, 
    LocalStorageService, 
    HttpService, 
    ClientService,
    ConfirmationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
