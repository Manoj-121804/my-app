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

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,children:[{path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent}, {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},{path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},{path:'bmi',component:BMIComponent}
    ,{path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},{path:'vehicles',component:VehiclesComponent},
    {path:'flipkart',component:FlipkartComponent},{path:'mail',component:MailComponent},
    {path:'weatherapp',component:WeatherappComponent}, {path:'pininterest',component:PininterestComponent}
  ]},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
