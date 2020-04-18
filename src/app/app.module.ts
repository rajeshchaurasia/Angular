import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { BlogComponent } from './blog/blog.component';
import { UsersComponent } from './users/users.component';

import { ExponentialStrengthPipe } from './_pipes/exponential-strength.pipe';
import { ActStatusPipe } from './_pipes/act-status.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { ReacFormComponent } from './reac-form/reac-form.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    BlogComponent,
   UsersComponent,
   ExponentialStrengthPipe,
   ParentComponent,
   ChildComponent,
   StockStatusComponent,
   DataBindingComponent,
   TempFormComponent,
   ReacFormComponent,
   MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent]

})
export class AppModule { }
