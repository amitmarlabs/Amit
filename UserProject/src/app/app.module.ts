import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from  '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared-service/user.service';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UpdateUserComponent } from './update-user/update-user.component';



const appRoutes: Routes =[
  {path:'' , component:ListuserComponent},
  {path:'userForm' , component:UserFormComponent},
  {path:'updateUser/:id' , component:UpdateUserComponent},
  { path: '**', redirectTo: '' }


];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
