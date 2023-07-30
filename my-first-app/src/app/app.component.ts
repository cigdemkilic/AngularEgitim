import { Component } from '@angular/core';



class ToDo{
  /*constructor(work:string,isCompleted:boolean){
    this.work=work;
    this.isCompleted=isCompleted;
  } */
  work:string ="";
  isCompleted:boolean=false;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
 todos:ToDo[]=[];
 todo:ToDo =new ToDo();

 save(event:ToDo){
  this.todo={...event}
  this.todos.push(
    this.todo
  );

 }


 }


