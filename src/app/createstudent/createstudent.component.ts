import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

  constructor(private _studentid:StudentService,private _router:Router,private _activatedRoute:ActivatedRoute){
    
    _activatedRoute.params.subscribe((data:any)=>{
      console.log(data.id);
      this.id=data.id;

       if(this.id){
          _studentid.getStudent(data.id).subscribe((data:any)=>{
        console.log(data);
        this.studentForm.patchValue(data);
      },(err:any)=>{
      alert("Unable To Fetch Data!")
    })
      }
    
    },(err:any)=>{
      alert("Internal Server Error!")

    })
  }
   id:any='';
  
  public studentForm:FormGroup= new FormGroup({
    name:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    profile_picture:new FormControl(),
   
  })
  
 submit(){
  if(this.id){
    this._studentid.updateStudent(this.id,this.studentForm.value).subscribe((data:any)=>{
      console.log(data);
      alert("Student Data Updated Successfully");
      this._router.navigateByUrl('/dashboard/student');

    },(err:any)=>{
      alert("Unable To Update")
    })

  }else{
 console.log(this.studentForm.value);
  this._studentid.createstudent(this.studentForm.value).subscribe((data:any)=>{
    console.log(data);
    alert("Student Record Created Successfully ✌")
    this._router.navigateByUrl('/dashboard/student');
  },(err:any)=>{
    alert("Internal Server Error")
  })
  }
 
}

}
