import { Component, Input } from '@angular/core';


class ToDo{
  /*constructor(work:string,isCompleted:boolean){
    this.work=work;
    this.isCompleted=isCompleted;
  } */
  work:string ="";
  isCompleted:boolean=false;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos:ToDo[]=[];
  
}
