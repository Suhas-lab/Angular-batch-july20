import { Component, OnInit } from '@angular/core';
class TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: 'app-todo-list',
  template: `<div class="row mt-1" style="height:80px"> 
        <div class="row col-12"> 
            <input [(ngModel)]="newtask" type="text" value="test" class="col-7 form-control" style="width:300px;">
            <button (click)="add()"  
                class="btn btn-light text-success col-5"> 
                ADD TASK 
            </button> 
            <div class="col-12"><span>{{remaincont}}</span></div>
            <div class="col-12">
            <ul>
              <li *ngFor="let item of items" [class]="item.isDone === true ? 'is-done' : '' ">
              <span (click)="deleteTask(item)">{{item.name}}</span></li>
            </ul>
            </div>
        </div>
    </div> `,
    styles: [`
    .is-done {
      text-decoration: line-through;
    }
    ul li{list-style: none;font-size:18px}
  `]
})
export class TodoListComponent implements OnInit {
  public name: string = '';
  public items: Array<TodoItem> = [];
  public newtask: any;
  public arrayList: any = [];
  public remaincont: any = 0;

  public getRemainingCount() {
    return this.items.filter(item => !item.isDone).length;
  }
  public add() {
    if (this.newtask == '') { 
        }else { 
            this.arrayList = {
              isDone: 0,
              name: this.newtask
            }
            this.items.push(this.arrayList); 
            this.newtask = ''; 
        }
        this.remaincont = this.getRemainingCount();        
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
    this.remaincont = this.getRemainingCount();
  }

  public deleteTask(index:any) { 
        this.toggleItem(index);
        this.remaincont = this.getRemainingCount();
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
