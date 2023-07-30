import { Component, EventEmitter, Output } from '@angular/core';

class ToDo{
  /*constructor(work:string,isCompleted:boolean){
    this.work=work;
    this.isCompleted=isCompleted;
  } */
  work:string ="";
  isCompleted:boolean=false;
}

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  @Output() myEvent = new EventEmitter();
   todo:ToDo =new ToDo();

  save(){
    this.myEvent.emit(this.todo)
    this.todo=new ToDo()

  }
}
