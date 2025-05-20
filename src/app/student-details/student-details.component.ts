import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
 
   id:any='';
   student:any='';
    constructor(private _activatedRoute:ActivatedRoute, private _studentid:StudentService) {
      _activatedRoute.params.subscribe((data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
      },(err:any)=>{
         alert("Internal Server Error!");
      })
  
       _studentid.getStudent(this.id).subscribe((data:any)=>{
        console.log(data);
        this.student=data;
       },(err:any)=>{
        alert("Internal Server Error!");
       })
    }
}
