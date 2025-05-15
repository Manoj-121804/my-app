import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

   student:any=[];
    constructor(private _studentid:StudentService){
  
        _studentid.getStudents().subscribe((data:any)=>{
          console.log(data);
        this.student=data;
        console.log(this.student);
      },(err:any)=>{
        alert("Internal Server Error!")
        })
    }

      keywords:any='';
   search(){
    this. _studentid.filteredStudents(this.keywords).subscribe((data:any)=>{
      console.log(data);
      this.student=data
    },(err:any)=>{
      alert("Internal Server Error!")
   })
  }

   column:any='';
   order:any='';
   sort(){
    this._studentid.sortedStudents(this.column,this.order).subscribe((data:any)=>{
      console.log(data);
      this.student=data;
    },(err:any)=>{
      alert("Internal Server Error!")
    })
   }

   
   limit:number=0;
   page:number=0;

   pagination(){
    this._studentid.paginatedStudents(this.limit,this.page).subscribe((data:any)=>{
      console.log(data);
      this.student=data;
    },(err:any)=>{
      alert("Internal Server Error!")
    })
   }

    delete(id:number){
      if(confirm("Are you sure to delete?")==true){
         this._studentid.deleteStudent(id).subscribe((data:any)=>{
     alert("record dleted successfully");
      //  this.loadStudents();
    },(err:any)=>{
      alert("Internal Server Error!")
    })
    }else{
      alert("You have cancelled delete")
    }
   }


}
