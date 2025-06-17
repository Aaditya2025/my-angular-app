import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [],
  templateUrl: './loop.component.html',
  styleUrl: './loop.component.css'
})
export class LoopComponent {
  users = ['Aditya', 'Sam', 'Robin', 'Sheeran', 'Adam']
  
  students = [
    {name: 'Adtiya', age: 12, email: 'ay332123@gmail.com'},
    {name: 'Adam', age: 21, email: 'adam31454323@gmail.com'},
    {name: 'San', age: 19, email: 'san3763@gmail.com'},
    {name: 'Robin', age: 25, email: 'robin213343@gmail.com'}
  ]
  studentsName = '';
  getName(name: string){
    console.log(name);
  }
}
