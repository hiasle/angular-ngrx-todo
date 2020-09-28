import { Component, OnInit } from '@angular/core';
import { Todo } from '@app/models/todo';
import { getAllDoneItems, getAllUndoneItems, TodoState } from '@app/todo/store';
import * as fromTodoStore from '@app/todo/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  items$: Observable<Todo[]>;
  doneItems$: Observable<Todo[]>;

  constructor(private store: Store<TodoState>) {}

  ngOnInit() {
    this.items$ = this.store.pipe(
      select(getAllUndoneItems),
      tap((data) => console.log(data))
      );
    this.doneItems$ = this.store.pipe(
      select(getAllDoneItems),
      tap(data => console.log("done items: " + data)));

    this.store.dispatch(fromTodoStore.loadAllTodos());
  }

  addTodo(item: string) {
    this.store.dispatch(fromTodoStore.addTodo({ payload: item }));
  }

  markAsDone(item: Todo) {
    this.store.dispatch(fromTodoStore.setAsDone({ payload: item }));
  }

  deleteItem(item: Todo) {
    this.store.dispatch(fromTodoStore.deleteTodo({ payload: item }));
  }
}
