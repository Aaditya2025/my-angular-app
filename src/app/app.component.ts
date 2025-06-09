/**********************************Counter App in Angular*******************************/

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   imports: [],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   // handleClickEvent(){
//   //   console.log("Function Called!");
//   //   this.otherFunction(); 
//   // }

//   // otherFunction(){
//   //   console.log("other function called!");
//   // }
//   count = 0;

//   // handleIncrement() {
//   //   this.count = this.count + 1;
//   // }

//   // handleReset() {
//   //   this.count = 0;
//   // }

//   // handleDecrement() {
//   //   this.count = this.count - 1;
//   // }

//   handleCount(val: string) {
//     if (val == "minus") {
//       if(this.count >0){
//         this.count = this.count - 1;
//       }else{
//         this.count = 0;
//       }
//     } else if (val == "plus") {
//       this.count = this.count + 1;
//     } else {
//       this.count = 0;
//     }
//   }
// }



/**********************************Events in Angular*******************************/

// Takin any action into the UI is called Events. 


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   imports: [],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// export class AppComponent{
//     handleEvent(event:Event){
//         // console.log("Function Called)", event);
//         console.log("Function Called)", event.type);
//         // console.log("Function Called)", (event.target as Element).className);  
//         console.log("Value", (event.target as HTMLInputElement).value);
        
//     }
// }










/**********************************Get & Set Input fields Values in Angular*******************************/



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   imports: [],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// export class AppComponent{
//   name=""
//   displayName = ""; 
//   email = "";
//   getName(event:Event){
//     this.name = (event.target as HTMLInputElement).value
//   }
//   showName(){
//     this.displayName = this.name
//   }
//   setName(){
//     this.name= "sam"
//   }
//   getMail(val:string){
//     console.log(val);
//     this.email = val;
//   }
//   setMail(){
//     this.email = "Ay135952@gmail.com"
//   }
// }



/**********************************If Else in Angular | Hide-Show | Toggle*******************************/
// import { Component } from "@angular/core";

// @Component({
//   selector:"app-root",
//   imports: [],
//   templateUrl:"./app.component.html",
//   styleUrl: 'app.component.css'

// })

// export class AppComponent{
//   display = true 
//   x = 10; 
//   toggleDiv = true;

//   hide(){
//     this.display = false;
//   }

//   show(){
//     this.display = true;
//   }

//   toggle(){
//     this.display =! this.display
//   }

//   toggleTwo(){
//     this.toggleDiv =! this.toggleDiv;
//   }
//  }




 /***********************************Else If in Angular | Control **************************************/
import { Component } from "@angular/core";

@Component({
  selector: 'app-root', 
  imports: [], 
  templateUrl : './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  val = 10;
  color = 'blue'
  colorValue(val: number){
    this.val = val;
  }

  handleInput(event: Event){
    this.val = parseInt((event.target as HTMLInputElement).value)
  }

  handleColor(event: Event){
    this.color = (event.target as HTMLInputElement).value;
  }

  changeColor(val: string){
    this.color = val;
  }
}