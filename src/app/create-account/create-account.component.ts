import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  
  constructor(private _accountService:AccountsService,private _router:Router){}
  
  public accountForm:FormGroup=new FormGroup({
    account_name:new FormControl(),
    account_number:new FormControl(),
    available_balance:new FormControl(),
   city:new FormControl(),
    ifsc_code:new FormControl(),
    profie_picture:new FormControl(),
    
  })
  
  submit(){
    console.log(this.accountForm.value);
    this. _accountService.createAccount(this.accountForm.value).subscribe((data:any)=>{
      console.log(data);
      alert("Account Created Successfully ✌")
      this._router.navigateByUrl('/dashboard/accounts');
    },(err:any)=>{
      alert("Internal Server Error")
    })
  }
}
