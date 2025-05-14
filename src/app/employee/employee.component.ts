import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  // employees: any = [
  //   { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
  //   { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
  //   { name: 'raj', experience: 10, package: 1600000, role: 'UIDeveloper' },
  //   { name: 'sunil', experience: 7, package: 1200000, role: 'UIDeveloper' },
  //   { name: 'latha', experience: 2, package: 600000, role: 'Software Developer' },
  //   { name: 'rama', experience: 6, package: 1400000, role: 'Software Developer' },
  //   { name: 'smitha', experience: 8, package: 1600000, role: 'Data engineer' },
  //   { name: 'john', experience: 3, package: 700000, role: 'Data engineer' },
  //   { name: 'david', experience: 2, package: 400000, role: 'Data engineer' },
  //   { name: 'smith', experience: 1, package: 300000, role: 'Testing Engineer' },
  //   { name: 'sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
  // ];

  // delete(i:number){
  //   alert(i);
  //   this.employees.splice(i,1);
  // }
  // packageHighToLow(){
  //   this.employees.sort((a:any,b:any)=>b.package-a.package);
  // }

  // role:any='';
  // roleFilter(){
  //   this.employees=this.employees.filter((employee:any)=>employee.role==this.role);
  // }

  // term:any='';
  // search(){
  //   this.employees=this.employees.filter((employee:any)=>employee.name.includes(this.term));
  // }
  
   products: any = [
    { name: 'Pen', price: 20, rating: 3, freeDelivery:'False' },
    { name: 'Iphone',price: 8000, rating: 5, freeDelivery: 'True'},
    { name: 'Shirt',price: 3000, rating: 4, freeDelivery: 'True' },
    { name: 'Cap', price: 4000, rating: 5, freeDelivery: 'True'},
    { name: 'Mobilecase',price: 199, rating: 3.5, freeDelivery: 'False'},
    { name: 'Remote',price: 600, rating: 3, freeDelivery: 'False' },
    { name: 'Watch', price: 7000, rating: 4.5, freeDelivery: 'True'},
    { name:'Chappal', price: 500, rating: 3, freeDelivery: 'False'},
    { name: 'Shoes',price: 5000, rating: 4, freeDelivery: 'True'},
  

   ];
  //Delete function using splice 
    delete(i:number){
    alert(i);
    this.products.splice(i,1);
    }
  //Search button functionality using filter 
    term:any='';
    search(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term));
   }
  //rating high to low button
   priceHighToLow(){
   this.products.sort((a:any,b:any)=>b.price-a.price);
   }
  //rating low to high button
   priceLowToHigh(){
   this.products.sort((a:any,b:any)=>a.price-b.price);
   }
  //rating low to high button
   ratingLowToHigh(){
   this.products.sort((a:any,b:any)=>a.rating-b.rating);
   }
  //rating high to low button
   ratingHighToLow(){
   this.products.sort((a:any,b:any)=>b.rating-a.rating);
   }
  //only free delivery button using filter method
   x:any='True';
   roleFilter(){
    this.products=this.products.filter((product:any)=>product.freeDelivery==this.x);
   }
  //Apply 50% discount using map method
  
   Discount(){
    this.products=this.products.map((product:any)=>{ product.price=product.price-(product.price*0.5);
    return product;
  });
  
    }

    

    totPrice(){
      let totalPrice;
      totalPrice=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
      alert(totalPrice);
    }

     totCartItems(){
       let totalCartItems;
      // totalCartItems=this.products.reduce((sum:any,product:any)=>sum+1,0);
      //  alert(totalCartItems);
      totalCartItems=this.products.length
        alert(totalCartItems);
    }

    //add to cart

    name:string='';
    price:number=0;
    rating:number=0;
    FDyes:boolean=true;
    FDno:boolean=false;

    addTOCart(){
      let product={
       name:this.name,
       price:this.price,
       rating:this.rating,
       freeDelivery:this.FDyes,
      // FDno:this.FDno
      }
      this.products.unshift(product)
      console.log(product);
    }
     
    priceWithDelivery(){
      
       this.products=this.products.map((product:any)=>{
        if(product.freeDelivery=="False"){
          product.price=product.price+100
          return product;
      
        }else{
          return product
        }
       
      
      });
        
    }
  



  //Add to cart button function using if else
  // ipt_price:any=0;
  // ipt_name:any=0;
  // ipt_rating:any=0;
  // ipt_freeDelivery:any=0;
  
  // product:any;

  //     cart(){
  //     if(this.ipt_name==this.product.name && this.ipt_price==this.product.price && this.ipt_rating==this.product.rating
  //       && this.ipt_freeDelivery==this.product.freeDelivery 
  //    ){
  //       this.products=this.products.filter((product:any)=>this.product==this.product);
  //     }else{
  //       alert('Product unavailable')
  //     }
  //    }

     }


  


