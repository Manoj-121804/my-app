import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BMIComponent } from './bmi/bmi.component';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { PininterestComponent } from './pininterest/pininterest.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentComponent } from './student/student.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AccountsComponent } from './accounts/accounts.component';
import { StudentReactiveFormComponent } from './student-reactive-form/student-reactive-form.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateAccountComponent } from './create-account/create-account.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CommunicationComponent } from './communication/communication.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { HooksComponent } from './hooks/hooks.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
    children:[{path:'home',component:HomeComponent,canActivate:[AuthenticationGuard]},
    {path:'welcome',component:WelcomeComponent,canActivate:[AuthenticationGuard]},
    {path:'data-binding',component:DataBindingComponent,canActivate:[AuthenticationGuard]},
    {path:'calculator',component:CalculatorComponent,canActivate:[AuthenticationGuard]},
    {path:'rectangle',component:RectangleComponent,canActivate:[AuthenticationGuard]},
    {path:'circle',component:CircleComponent,canActivate:[AuthenticationGuard]},
    {path:'bmi',component:BMIComponent,canActivate:[AuthenticationGuard]},
    {path:'directives',component:DirectivesComponent,canActivate:[AuthenticationGuard]},
    {path:'employee',component:EmployeeComponent,canActivate:[AuthenticationGuard]},
    {path:'vehicles',component:VehiclesComponent,canActivate:[AuthenticationGuard]},
    {path:'flipkart',component:FlipkartComponent,canActivate:[AuthenticationGuard]},
    {path:'mail',component:MailComponent,canActivate:[AuthenticationGuard]},
    {path:'weatherapp',component:WeatherappComponent,canActivate:[AuthenticationGuard]},
    {path:'pininterest',component:PininterestComponent,canActivate:[AuthenticationGuard]},
    {path:'create-vehicle',component:CreateVehicleComponent,canActivate:[AuthenticationGuard]},
    {path:'student',component:StudentComponent,canActivate:[AuthenticationGuard]},
    {path:'createstudent',component:CreatestudentComponent,canActivate:[AuthenticationGuard]},
    {path:'edit-student/:id',component:CreatestudentComponent,canActivate:[AuthenticationGuard]},
    {path:'create-user',component:CreateUserComponent,canActivate:[AuthenticationGuard]},
    {path:'communication',component:CommunicationComponent,canActivate:[AuthenticationGuard]},
    {path:'accounts',component:AccountsComponent,canActivate:[AuthenticationGuard]}, 
    {path:'student-reactive-form',component:StudentReactiveFormComponent,canActivate:[AuthenticationGuard]},
    {path:'create-account',component:CreateAccountComponent,canActivate:[AuthenticationGuard]},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent,canActivate:[AuthenticationGuard]},
    {path:'student-details/:id',component:StudentDetailsComponent,canActivate:[AuthenticationGuard]},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent,canActivate:[AuthenticationGuard]},
    {path:'sibling1',component:Sibling1Component,canActivate:[AuthenticationGuard]},
    {path:'hooks',component:HooksComponent,canActivate:[AuthenticationGuard]},
  ]}, 
 
    {
      path:'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    },

  
  {path:'**',component:ErrorComponent,canActivate:[AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
