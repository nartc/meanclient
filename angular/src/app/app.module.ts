import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpModule } from '@angular/http';
//PrimeNG Imports
import { FileUploadModule, 
         InputTextModule,
         InputMaskModule,
         PanelModule,
         ButtonModule,
         MessagesModule 
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

//Service Imports
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { HttpService } from './services/http.service';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'upload', component: UploadClientComponent},
  {path: 'add', component: AddClientComponent}
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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    InputTextModule,
    InputMaskModule,
    PanelModule,
    ButtonModule,
    MessagesModule
  ],
  providers: [AuthService, LocalStorageService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
