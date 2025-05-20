import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard] ,children:[{path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent}, {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},{path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},{path:'bmi',component:BMIComponent}
    ,{path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},{path:'vehicles',component:VehiclesComponent},
    {path:'flipkart',component:FlipkartComponent},{path:'mail',component:MailComponent},
    {path:'weatherapp',component:WeatherappComponent}, {path:'pininterest',component:PininterestComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},{path:'student',component:StudentComponent},
    {path:'createstudent',component:CreatestudentComponent},{path:'edit-student/:id',component:CreatestudentComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'accounts',component:AccountsComponent}, {path:'student-reactive-form',component:StudentReactiveFormComponent},
    {path:'create-account',component:CreateAccountComponent}, {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},{path:'edit-vehicle/:id',component:CreateVehicleComponent}
  ]}, 
  
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
