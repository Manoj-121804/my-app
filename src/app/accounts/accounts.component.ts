import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
   accounts:any =[];
    constructor(private _accountsService:AccountsService){
     this.loadAccounts();
    }

    loadAccounts(){
       this._accountsService.getAccounts().subscribe((data:any)=>{
        console.log(data);
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal Server Error!")
      }
      )
    }

      keywords:any='';
   search(){
    this._accountsService.filteredAccounts(this.keywords).subscribe((data:any)=>{
      console.log(data);
      this.accounts=data
    },(err:any)=>{
      alert("Internal Server Error!")
   })
  }

  column:any='';
  order:any='';
  sort(){
    this._accountsService.sortedAccounts(this.column,this.order).subscribe((data:any)=>{
      console.log(data);
      this.accounts=data;

    },(err:any)=>{
      alert("Internal Server Error!")
   })
  }

  limit:any='';
  page:any='';

  paginate(){
    this._accountsService.paginatedAccounts(this.limit,this.page).subscribe((data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal Server Error!")
    })
  }

  delete(id:number){
      if(confirm("Are you sure to delete?")==true){
         this._accountsService.deleteAccount(id).subscribe((data:any)=>{
     alert("record deleted successfully");
       this.loadAccounts();
    },(err:any)=>{
      alert("Internal Server Error!")
    })
    }else{
      alert("You have cancelled delete")
    }
   }
}
