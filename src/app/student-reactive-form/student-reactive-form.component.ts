import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-reactive-form',
  templateUrl: './student-reactive-form.component.html',
  styleUrls: ['./student-reactive-form.component.css']
})
export class StudentReactiveFormComponent {

   constructor(){
    this.studentForm.get('type')?.valueChanges.subscribe((data:any)=>{
      if(data=='dayScholar'){
        this.studentForm.addControl('busFee',new FormControl());
        this.studentForm.removeControl('hostelFee');
      }else{
        this.studentForm.addControl('hostelFee',new FormControl());
        this.studentForm.removeControl('busFee');
      }
    })
  }


  public studentForm:FormGroup=new FormGroup({

    name:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    class:new FormControl('',[Validators.required,Validators.min(1),Validators.max(11)]),
    fatherName:new FormControl(),
    mobileNumber:new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email:new FormControl(),
    dob:new FormControl(),
    
    address:new FormGroup({

      addressLine: new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode: new FormControl('',[Validators.required,Validators.max(599999),Validators.min(500000)]),

                          }),

      type:new FormControl(),
      cards:new FormArray([]),
    
  })

      get CardsFormArray(){
      return this.studentForm.get('cards') as FormArray;
    }

     addCard(){

    this.CardsFormArray.push(new FormGroup({
      class:new FormControl(),
      year:new FormControl(),
      percentage:new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
     
    })
  )
  }

   deleteCard(i:number){
    this.CardsFormArray.removeAt(i);
  }

  submit(){
    console.log(this.studentForm.value);
  }

}
  
